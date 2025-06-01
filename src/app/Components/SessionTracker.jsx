'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import useAnonUserStore from '@/store/useAnonUserStore'

export default function SessionTracker() {
  const searchParams = useSearchParams()
  const { uuid, setUUID } = useAnonUserStore()

  useEffect(() => {
    let currentUUID = uuid

    const urlUUID = searchParams.get('uuid')
    if (urlUUID) {
      setUUID(urlUUID)
      currentUUID = urlUUID
    }

    const entranceTime = new Date().toISOString()

    // Send entrance event
    fetch('/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uuid: currentUUID, entranceTime, event: 'entrance' }),
    })

    // Send exit event on unload
    const handleBeforeUnload = () => {
      const exitTime = new Date().toISOString()
      navigator.sendBeacon(
        '/api/session',
        JSON.stringify({ uuid: currentUUID, exitTime, event: 'exit' })
      )
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [searchParams, setUUID, uuid])

  return null
}
