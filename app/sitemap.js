export default function sitemap() {
  const base = "https://tinenyasha-butchery.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
}
