// Centralized business info — update this file and the entire site updates.
export const SITE = {
  name: "Tinenyasha Butchery & Farm-Fresh",
  shortName: "Tinenyasha Butchery",
  tagline: "Premium Butchery & Farm-Fresh Produce — Marondera & Harare",
  serviceArea: "Serving Marondera & Harare",

  // Primary physical address
  address: "59A Carrington Avenue, Marondera, Zimbabwe",

  // All branch locations
  locations: [
    {
      city: "Marondera",
      address: "59A Carrington Avenue, Marondera",
      mapsQuery: "59A Carrington Avenue, Marondera, Zimbabwe",
    },
    {
      city: "Harare",
      address: "Number 7 Logan, Hatfield, Harare",
      mapsQuery: "Number 7 Logan, Hatfield, Harare, Zimbabwe",
    },
  ],

  email: "tinenyashaagroproducts@gmail.com",

  // Phones: 0778285191 and 0777276416
  phones: ["+263 778 285 191", "+263 777 276 416"],
  primaryPhone: "+263778285191",
  whatsapp: "263778285191", // digits only, used for wa.me link
  whatsappMessage:
    "Hello, I would like to order from Tinenyasha Butchery & Farm-Fresh.",

  // Social — Facebook page name: "Tinenyasha Butchery Farmfresh Produces"
  facebookUrl:
    "https://www.facebook.com/search/top?q=Tinenyasha%20Butchery%20Farmfresh%20Produces",

  mapsEmbed:
    "https://www.google.com/maps?q=59A%20Carrington%20Avenue%2C%20Marondera%2C%20Zimbabwe&output=embed",
};

export const waLink = (text = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = (n) => `tel:${(n || SITE.primaryPhone).replace(/\s+/g, "")}`;
