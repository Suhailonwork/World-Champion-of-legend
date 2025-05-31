import { NextResponse } from 'next/server';

export const runtime = 'edge';

export default function handler(req) {
  const baseUrl = 'https://www.wclcricket.com';
  const paths = [
    '/', '/news', '/videos', '/gallery', '/teams', '/teams/australia-champions',
    '/teams/england-champions', '/teams/india-champions', '/teams/pakistan-champions',
    '/teams/south-africa-champions', '/teams/west-indies-champions', '/lwl',
    '/tickets', '/about', '/contact', '/partners', '/privacy', '/terms-conditions', '/cancellation-refund'
  ];

  const pages = paths.map((path) => {
    const changeFrequency = path === '/' || path === '/news' ? 'daily' :
                            path === '/videos' || path === '/gallery' || path === '/tickets' ? 'weekly' :
                            path === '/teams' || path === '/lwl' || path === '/partners' ? 'monthly' : 'yearly';
    const priority = path === '/' ? 1.0 :
                     path === '/news' || path === '/teams' || path === '/tickets' ? 0.9 :
                     path === '/videos' || path === '/gallery' || path === '/lwl' ? 0.8 :
                     path.startsWith('/teams/') ? 0.7 : 0.6;

    return {
      url: `${baseUrl}${path}`,
      changeFrequency,
      priority,
      lastModified: new Date().toISOString(),
    };
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified}</lastmod>
          <changefreq>${page.changeFrequency}</changefreq>
          <priority>${page.priority}</priority>
        </url>`).join('')}
    </urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  });
}
