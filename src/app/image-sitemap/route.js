export async function GET() {
  const images = [
    {
      id: 1,
      title: "Arafa webs | RepZone Active Wear",
      caption: "Built with Next.js by Arafawebs",
    },
    {
      id: 2,
      title: "Arafa webs | Minimarvels",
      caption: "Designed by Arafawebs using Next.js",
    },
    { id: 3, title: "Arafa webs | Zenzed", caption: "Crafted using Next.js by Arafawebs" },
    {
      id: 4,
      title: "Arafa webs | Junk Brands",
      caption: "Developed by Arafawebs with Next.js",
    },
    { id: 5, title: "Arafa webs | Zenzed", caption: "Built using Next.js by Arafawebs" },
    { id: 6, title: "Arafa webs | Mamas Armour", caption: "Powered by Next.js – Arafawebs" },
    { id: 7, title: "Arafa webs | Maseer", caption: "Next.js project by Arafawebs" },
    {
      id: 8,
      title: "Arafa webs | Sofasway",
      caption: "Developed with Next.js by Arafawebs",
    },
    { id: 9, title: "Arafa webs | RepFitness", caption: "Next.js design by Arafawebs" },
    {
      id: 10,
      title: "Arafa webs | Mantelsdirect",
      caption: "Designed using Next.js by Arafawebs",
    },
    { id: 11, title: "Arafa webs | Kinobody", caption: "Next.js Shopify site by Arafawebs" },
    {
      id: 12,
      title: "Arafa webs | Beach Camera",
      caption: "Created using Next.js by Arafawebs",
    },
    {
      id: 13,
      title: "Arafa webs | Worldwide Stereo",
      caption: "Next.js eCommerce by Arafawebs",
    },
    {
      id: 14,
      title: "Arafa webs | Jula Amsterdam",
      caption: "Modern Shopify site by Arafawebs",
    },
    {
      id: 15,
      title: "Arafa webs | Mod Lighting",
      caption: "Next.js web design by Arafawebs",
    },
    { id: 16, title: "Arafa webs | Everyday", caption: "Developed by Arafawebs in Next.js" },
    {
      id: 17,
      title: "Arafa webs | Goosecreekcandle",
      caption: "Shopify storefront built with Next.js",
    },
    {
      id: 18,
      title: "Arafa webs | eGoat",
      caption: "eCommerce UI by Arafawebs using Next.js",
    },
    { id: 19, title: "Arafa webs | La Bottine", caption: "Next.js web design by Arafawebs" },
    {
      id: 20,
      title: "Arafa webs | Noah Moda",
      caption: "Developed using Next.js by Arafawebs",
    },
    { id: 21, title: "Arafa webs | Tempotent", caption: "Creative Shopify UX by Arafawebs" },
    {
      id: 22,
      title: "Arafa webs | Lumber Liquidators",
      caption: "Developed with Next.js by Arafawebs",
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://arafawebs.com/portfolio</loc>
    ${images
      .map(
        (img) => `
    <image:image>
      <image:loc>https://arafawebs.com/shopify/${img.id}.png</image:loc>
      <image:title>${img.title} Shopify website</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
      )
      .join("")}
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
