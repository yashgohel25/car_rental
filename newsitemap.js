import { MetadataRoute } from 'next'

export default function sitemap() {
  const baseUrl = 'https://radhecarrental.vercel.app'
  const now = new Date()
  
  const getLastModified = (pageType = 'regular') => {
    const date = new Date(now);
    
    if (pageType === 'car') {
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
    }
    
    return date;
  };

  return [
    {
      url: baseUrl,
      lastModified: getLastModified('home'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/index.html`,
      lastModified: getLastModified('regular'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/index2.html`,
      lastModified: getLastModified('regular'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/index3.html`,
      lastModified: getLastModified('regular'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/index4.html`,
      lastModified: getLastModified('regular'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/index5.html`,
      lastModified: getLastModified('regular'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car/Creta.html`,
      lastModified: getLastModified('car'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car/Venue.html`,
      lastModified: getLastModified('car'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car/Swift_White.html`,
      lastModified: getLastModified('car'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car/Swift_Black.html`,
      lastModified: getLastModified('car'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car/Ertiga.html`,
      lastModified: getLastModified('car'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car/Taison.html`,
      lastModified: getLastModified('car'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}