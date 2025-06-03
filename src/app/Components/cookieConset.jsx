'use client'

import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="user_cookie_consent"
      style={{ background: '#2B373B' }}
      buttonStyle={{
        backgroundColor: '#4CAF50',
        color: '#fff',
        fontSize: '13px',
        borderRadius: '5px',
        padding: '10px 20px',
      }}
      declineButtonStyle={{
        backgroundColor: '#f44336',
        color: '#fff',
        fontSize: '13px',
        borderRadius: '5px',
        padding: '10px 20px',
        marginLeft: '10px',
      }}
      enableDeclineButton
      expires={365}
    >
      This website uses cookies to enhance the user experience.{' '}
      <Link href="/privacypolicy" style={{ color: '#FFD700', textDecoration: 'underline' }}>
        Learn more
      </Link>
    </CookieConsent>
  )
}
