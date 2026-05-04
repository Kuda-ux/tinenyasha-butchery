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

  // Phone: correct number is +263 785 384 443 (0785384443)
  phones: ["+263 785 384 443"],
  primaryPhone: "+263785384443",
  whatsapp: "263785384443", // digits only, used for wa.me link
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
