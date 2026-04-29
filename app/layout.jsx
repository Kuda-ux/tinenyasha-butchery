import "./globals.css";

export const metadata = {
  title: "Tinenyasha Butchery & Farm-Fresh Produces | Marondera, Zimbabwe",
  description:
    "Premium quality meat and farm-fresh produce in Marondera. Beef, pork, goat, chicken, fish, sausages, polony, burger patties, vegetables and fruits — delivered fresh to your doorstep.",
  keywords: [
    "butchery in Marondera",
    "fresh meat Zimbabwe",
    "farm fresh produce Zimbabwe",
    "Tinenyasha Butchery",
    "meat delivery Marondera",
    "beef Zimbabwe",
    "pork Marondera",
    "goat meat Zimbabwe",
    "chicken Marondera",
  ],
  metadataBase: new URL("https://tinenyasha-butchery.vercel.app"),
  openGraph: {
    title: "Tinenyasha Butchery & Farm-Fresh Produces",
    description:
      "Fresh from farm to your table. Premium meat & farm produce in Marondera, Zimbabwe.",
    type: "website",
    locale: "en_ZW",
    images: ["/logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinenyasha Butchery & Farm-Fresh Produces",
    description: "Fresh from farm to your table. Marondera, Zimbabwe.",
    images: ["/logo.jpeg"],
  },
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

export const viewport = {
  themeColor: "#0B2A5B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
