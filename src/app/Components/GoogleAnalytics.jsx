'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false)
  const trackingId = process.env.GOOGLE_ANALYTICS_TRACKING_ID

  useEffect(() => {
    // Check if the consent cookie has been set and accepted
    const match = document.cookie.match(/(^| )user_cookie_consent=([^;]+)/)
    if (match && match[2] === 'true') {
      setConsentGiven(true)
    }
  }, [])

  if (!consentGiven || !trackingId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  )
}
