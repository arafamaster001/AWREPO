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
      style={{ background: '#000000', padding:'0 5%', borderTop:'1px solid #353434' }}
      buttonStyle={{
        backgroundColor: '',
        color: '#4CAF50',
        fontSize: '15px',
        border:'1px solid #4CAF50',
        borderRadius: '5px',
        padding: '10px 20px',
        fontStyle:'bold'
      }}
      declineButtonStyle={{
        backgroundColor: '#000000',
        color: '#f44336',
        fontSize: '15px',
        border:'1px solid #f44336',
        borderRadius: '5px',
        padding: '10px 20px',
        marginLeft: '10px',
        fontStyle:'bold'
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
