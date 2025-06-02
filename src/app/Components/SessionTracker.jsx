'use client';

import { Suspense, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import useAnonUserStore from '@/store/useAnonUserStore';

function Session() {
  const searchParams = useSearchParams();
  const { uuid, setUUID } = useAnonUserStore();
  const hasTrackedEntrance = useRef(false);

  useEffect(() => {
    const trackSession = async () => {
      try {
        // Initialize UUID
        let currentUUID = uuid;
        const urlUUID = searchParams.get('uuid');

        if (urlUUID) {
          setUUID(urlUUID);
          currentUUID = urlUUID;
        } else if (!currentUUID) {
          currentUUID = uuidv4();
          setUUID(currentUUID);
        }

        // Prevent duplicate entrance tracking
        if (hasTrackedEntrance.current) {
          return;
        }
        hasTrackedEntrance.current = true;

        const entranceTime = new Date().toISOString();

        // Fetch location data client-side
        let locationData = {};
        try {
          const response = await fetch(
            "https://ipinfo.io?token=8dd9c685199d9b"
          );
          if (!response.ok) {
            // Silently handle failed location fetch
            locationData = {};
          } else {
            locationData = await response.json();
          }
        } catch {
          // Silently handle location fetch error
          locationData = {};
        }

        // Send entrance event
        const entranceResponse = await fetch('/api/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            uuid: currentUUID,
            entranceTime,
            event: 'entrance',
            location: locationData,
          }),
        });

        if (!entranceResponse.ok) {
          throw new Error('Failed to send entrance event');
        }

        // Handle exit event
        const handleBeforeUnload = () => {
          const exitTime = new Date().toISOString();
          const payload = new Blob(
            [
              JSON.stringify({
                uuid: currentUUID,
                exitTime,
                event: 'exit',
                location: locationData,
              }),
            ],
            { type: 'application/json' }
          );
          navigator.sendBeacon('/api/session', payload);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
          hasTrackedEntrance.current = false;
        };
      } catch {
        // Silently handle errors, they will be logged on the backend
      }
    };

    trackSession();
  }, [searchParams, setUUID, uuid]);

  return null;
}

export default function SessionTracker() {
  return (
    <Suspense fallback={null}>
      <Session />
    </Suspense>
  );
}