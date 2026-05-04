import "./globals.css";

export const metadata = {
  title: "Tinenyasha Butchery & Farm-Fresh | Butchery in Marondera & Harare",
  description:
    "Tinenyasha Butchery & Farm-Fresh supplies quality beef, pork, goat meat, chicken, fish, sausages, polony, roadrunners and farm-fresh produce in Marondera and Harare.",
  keywords: [
    "Tinenyasha Butchery",
    "Tinenyasha Farm Fresh",
    "butchery in Marondera",
    "butchery in Harare",
    "fresh meat Zimbabwe",
    "beef Marondera",
    "pork Harare",
    "goat meat Zimbabwe",
    "chicken",
    "fish",
    "sausages",
    "polony",
    "roadrunners",
    "farm fresh produce",
  ],
  metadataBase: new URL("https://tinenyasha-butchery.vercel.app"),
  openGraph: {
    title: "Tinenyasha Butchery & Farm-Fresh | Marondera & Harare",
    description:
      "Quality beef, pork, goat, chicken, fish, sausages, polony, roadrunners and farm-fresh produce — serving Marondera & Harare, Zimbabwe.",
    type: "website",
    locale: "en_ZW",
    images: ["/logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinenyasha Butchery & Farm-Fresh",
    description:
      "Butchery & farm-fresh produce in Marondera and Harare, Zimbabwe.",
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
