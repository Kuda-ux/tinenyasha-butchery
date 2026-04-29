export const SITE = {
  name: "Tinenyasha Butchery & Farm-Fresh Produces",
  shortName: "Tinenyasha Butchery",
  tagline: "Fresh From Farm to Your Table",
  address: "59A Carrington Avenue, Marondera, Zimbabwe",
  email: "tinenyashaagroproducts@gmail.com",
  phones: ["+263 778 285 191", "+263 785 384 43", "+263 777 276 416"],
  primaryPhone: "+263778285191",
  whatsapp: "263778285191",
  whatsappMessage: "Hello, I would like to order from Tinenyasha Butchery",
  mapsEmbed:
    "https://www.google.com/maps?q=Marondera%2C%20Zimbabwe&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

export const waLink = (text = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = (n) => `tel:${n.replace(/\s+/g, "")}`;
