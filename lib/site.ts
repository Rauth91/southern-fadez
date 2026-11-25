export const site = {
  name: "Southern Fadez",
  tagline: "Good cuts. Good company.",
  established: 2016,
  city: "Gonzales, Louisiana",
  addressLine: "38058 LA-621 Ste E",
  cityLine: "Gonzales, LA 70737",
  phoneDisplay: "(225) 323-2044",
  phoneHref: "tel:+12253232044",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=38058+LA-621+Ste+E+Gonzales+LA+70737",
  hours: [
    { day: "Monday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Tuesday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Wednesday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Thursday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Friday", time: "8:30–6", opensAt: 8 * 60 + 30, closesAt: 18 * 60 },
    { day: "Saturday", time: "8:30–2:30", opensAt: 8 * 60 + 30, closesAt: 14 * 60 + 30 },
    { day: "Sunday", time: "Closed", opensAt: null, closesAt: null },
  ],
} as const;

export const routes = {
  home: "/",
  book: "/crew",
} as const;

export const homeSections = {
  barbers: "/#barbers",
  services: "/#services",
  shop: "/#shop",
  story: "/#story",
} as const;

export type NavigationItem = {
  href: string;
  label: string;
  footerLabel: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  {
    href: homeSections.barbers,
    label: "Book",
    footerLabel: "Book a barber",
  },
  {
    href: homeSections.services,
    label: "Services",
    footerLabel: "Services + prices",
  },
  {
    href: homeSections.shop,
    label: "The shop",
    footerLabel: "Location + hours",
  },
  {
    href: homeSections.story,
    label: "Our story",
    footerLabel: "Our story",
  },
] as const;

export const hoursLine =
  "Mon–Thu 9–6 · Fri 8:30–6 · Sat 8:30–2:30 · Sun closed";

export type WalkInService = {
  name: string;
  description?: string;
  price: string;
};

export const walkInServices: WalkInService[] = [
  {
    name: "Regular haircut",
    description: "Any fade higher than a #1 or a scissor cut",
    price: "$25",
  },
  {
    name: "Skin fade",
    description: "Any haircut lower than a #1 fade",
    price: "$35",
  },
  { name: "Taper fade", price: "$30" },
  { name: "Beard trim + line up", price: "$15" },
  { name: "Hair wash", price: "$10" },
];

export type Barber = {
  slug: string;
  name: string;
  role: string;
  aka?: string;
  short: string;
  story: string;
  image: string;
  imageAlt: string;
  specialties: string[];
  theCutUrl: string | null;
};

export const barbers: Barber[] = [
  {
    slug: "keenan-louviere",
    name: "Keenan Louviere",
    role: "Barber",
    short: "Behind the chair on Highway 621.",
    story:
      "Keenan is one of four barbers behind the chairs at Southern Fadez in Gonzales. Call the shop for his current availability; walk-ins are welcome when a chair is open.",
    image: "/images/barber-keenan-louviere.jpg",
    imageAlt: "Keenan Louviere inside Southern Fadez",
    specialties: [],
    theCutUrl: "https://www.vagaro.com/barberingbykeenanl",
  },
  {
    slug: "logan-eubanks",
    name: "Logan Eubanks",
    role: "Barber",
    short: "One of four chairs at Southern Fadez.",
    story:
      "Logan is part of the four-barber Southern Fadez crew in Gonzales. Call the shop for his current availability, or stop in when a chair is open.",
    image: "/images/barber-logan-eubanks.jpg",
    imageAlt: "Logan Eubanks inside Southern Fadez",
    specialties: [],
    theCutUrl: "https://app.thecut.co/barbers/LoStylez",
  },
  {
    slug: "jaden-guitreau",
    name: "Jaden Guitreau",
    role: "Barber",
    short: "Cutting at Southern Fadez in Gonzales.",
    story:
      "Jaden cuts at Southern Fadez on Highway 621. Call the shop for his current availability; walk-ins are welcome when a chair is open.",
    image: "/images/barber-jaden-guitreau.jpg",
    imageAlt: "Jaden Guitreau inside Southern Fadez",
    specialties: [],
    theCutUrl: null,
  },
  {
    slug: "chaz",
    name: "Chaz Boudreaux",
    role: "Founder / Barber",
    aka: "Darth Fadez",
    short: "Still in the chair. The fade has to hold outside.",
    story:
      "Chaz opened Southern Fadez in 2016. Clients call him Darth Fadez. He still takes his own books. The lineup has to sit when you walk into the sun, not just under the shop lamps.",
    image: "/images/barber-chaz-boudreaux-v2.jpg",
    imageAlt: "Chaz Boudreaux inside Southern Fadez",
    specialties: ["Skin fades", "Line ups", "Consistency"],
    theCutUrl: "https://search.thecut.co/barbers/SouthernFadez",
  },
];

export const visibleBarbers = barbers;
