// app/sitemap.xml/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://arafawebs.com';

  const urls = [
    '', // homepage
    'mernstack',
    'shopify',
    'wordpress',
    'telemetry',
    'privacypolicy',
    'termsandconditions',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}/${url}</loc>
        <changefreq>monthly</changefreq>
        <priority>${url === '' ? '1.0' : '0.8'}</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
