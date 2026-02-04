import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/success/'],
      },
    ],
    sitemap: 'https://projecthelp.in/sitemap.xml',
  };
}
