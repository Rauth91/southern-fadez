export const site = {
  name: "Southern Fadez",
  tagline: "Good cuts. Good company.",
  established: 2016,
  city: "Prairieville, Louisiana",
  addressLine: "17357 Airline Hwy, Suite B",
  cityLine: "Prairieville, LA 70769",
  phoneDisplay: "(225) 323-2044",
  phoneHref: "tel:+12253232044",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=17357+Airline+Hwy+Suite+B+Prairieville+LA+70769",
  hours: [
    { day: "Sunday", time: "Closed", opensAt: null, closesAt: null },
    { day: "Monday", time: "Closed", opensAt: null, closesAt: null },
    { day: "Tuesday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Wednesday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Thursday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Friday", time: "9–6", opensAt: 9 * 60, closesAt: 18 * 60 },
    { day: "Saturday", time: "8–4", opensAt: 8 * 60, closesAt: 16 * 60 },
  ],
} as const;

export const hoursLine = "Tue–Fri 9–6 · Sat 8–4 · Closed Sun–Mon";

export type Service = {
  name: string;
  duration: string;
  price: string;
  note?: string;
};

export const coreServices: Service[] = [
  { name: "Skin fade", duration: "45m", price: "$45" },
  { name: "Bald fade", duration: "45m", price: "$50" },
  { name: "Haircut", duration: "30m", price: "$35" },
  { name: "Cut + beard", duration: "45m", price: "$50" },
  { name: "Line up", duration: "15m", price: "$18" },
];

export const extraServices: Service[] = [
  { name: "Beard", duration: "20m", price: "$20" },
  { name: "Kids cut", duration: "30m", price: "$25", note: "12 and under" },
  { name: "Hot towel shave", duration: "30m", price: "$35" },
  { name: "Designs", duration: "add-on", price: "from $10" },
];

export const services: Service[] = [...coreServices, ...extraServices];

export const featuredServices = coreServices.filter((service) =>
  ["Haircut", "Bald fade", "Skin fade", "Line up"].includes(service.name),
);

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
    slug: "chaz",
    name: "Chaz",
    role: "Founder / Barber",
    aka: "Darth Fadez",
    short: "Still in the chair. The fade has to hold outside.",
    story:
      "Chaz opened Southern Fadez on Airline Hwy in 2016. Clients call him Darth Fadez. He still takes his own books. The lineup has to sit when you walk into the sun, not just under the shop lamps.",
    image: "/images/barber-chaz-approved-v2.png",
    imageAlt: "Chaz standing beside his chair inside Southern Fadez",
    specialties: ["Skin fades", "Line ups", "Consistency"],
    theCutUrl: "https://search.thecut.co/barbers/SouthernFadez",
  },
  {
    slug: "jay",
    name: "Jay",
    role: "Barber",
    short: "Tapers. Same cut every time. He will tell you the truth about your hairline.",
    story:
      "Jay is the chair when you already know what you want. Patient with a cowlick. Faster than he looks.",
    image: "/images/barber-jay.jpg",
    imageAlt: "Jay finishing the edge of a haircut with a straight razor",
    specialties: ["Tapers", "Repeat cuts", "Straight answers"],
    theCutUrl: null,
  },
  {
    slug: "trey",
    name: "Trey",
    role: "Barber",
    short: "Kids, first fades, then dad in the next slot.",
    story:
      "Trey cuts the little ones without rushing them. If a new shape-up makes you nervous, sit with him.",
    image: "/images/barber-trey.jpg",
    imageAlt: "Trey combing through a fresh fade at the chair",
    specialties: ["Kids cuts", "First fades", "A calm chair"],
    theCutUrl: null,
  },
  {
    slug: "caleb",
    name: "Caleb",
    role: "Barber",
    short: "Beards, bald fades, last pass with the razor.",
    story:
      "Caleb does the parts other people rush: neck, cheek line, the last razor pass. He does not talk over the clippers unless you start it.",
    image: "/images/barber-caleb.jpg",
    imageAlt: "Caleb finishing a haircut inside the barbershop",
    specialties: ["Beards", "Bald fades", "Razor finish"],
    theCutUrl: null,
  },
];

// Review-only chairs stay visible until Chaz approves the site for launch.
export const SHOW_CONCEPT_BARBERS = true;

export const visibleBarbers = SHOW_CONCEPT_BARBERS
  ? barbers
  : barbers.filter((barber) => barber.slug === "chaz");

export const shopPhotos = [
  {
    src: "/images/storefront.jpg",
    alt: "The hydraulic chair — tufted seat, chrome arms, porcelain rest",
    wide: true,
  },
  {
    src: "/images/clippers.jpg",
    alt: "Straight razor on a fade, close",
    wide: false,
  },
  {
    src: "/images/barber-chaz.jpg",
    alt: "Shears hung on a wood rack",
    wide: false,
  },
  {
    src: "/images/chair-close.jpg",
    alt: "Shears seated in a wood station",
    wide: true,
  },
];
