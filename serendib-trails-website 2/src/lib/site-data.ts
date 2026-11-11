import sigiriya from "@/assets/hero-sigiriya.jpg";
import ella from "@/assets/hero-ella.jpg";
import mirissa from "@/assets/hero-mirissa.jpg";
import tea from "@/assets/hero-tea.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import galle from "@/assets/dest-galle.jpg";
import yala from "@/assets/dest-yala.jpg";
import stilt from "@/assets/dest-stilt.jpg";

export const company = {
  name: "Serendib Trails",
  tagline: "Sri Lanka, beautifully guided",
  phone: "+94 77 123 4567",
  email: "hello@serendibtrails.lk",
  address: "42 Galle Road, Colombo 03, Sri Lanka",
  whatsapp: "94771234567",
};

export const heroSlides = [
  {
    image: sigiriya,
    place: "Sigiriya",
    title: "Climb the Lion Rock at",
    accent: "sunrise.",
    text: "A 5th-century sky fortress rising above misty jungle.",
  },
  {
    image: ella,
    place: "Ella",
    title: "Ride the world's most",
    accent: "scenic train.",
    text: "Blue carriages, nine stone arches and endless tea hills.",
  },
  {
    image: mirissa,
    place: "Mirissa",
    title: "Golden beaches,",
    accent: "turquoise seas.",
    text: "Whale watching mornings and palm-fringed sunsets.",
  },
  {
    image: tea,
    place: "Nuwara Eliya",
    title: "Wander through misty",
    accent: "tea country.",
    text: "Pluck, taste and sip Ceylon tea where it grows.",
  },
];

export type Destination = {
  slug: string;
  name: string;
  region: string;
  image: string;
  blurb: string;
  tagline: string;
  lat: number;
  lng: number;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "sigiriya",
    lat: 7.957,
    lng: 80.7603,
    tagline: "A sky fortress above the jungle.",
    name: "Sigiriya",
    region: "Cultural Triangle",
    image: sigiriya,
    blurb: "The ancient rock fortress of King Kashyapa, with frescoes, water gardens and sweeping views.",
    highlights: ["Lion Rock climb", "Sigiriya frescoes", "Pidurangala sunrise"],
  },
  {
    slug: "kandy",
    lat: 7.2936,
    lng: 80.6413,
    tagline: "Sacred temples and lakeside evenings.",
    name: "Kandy",
    region: "Hill Capital",
    image: kandy,
    blurb: "Home of the Temple of the Sacred Tooth Relic and the last royal kingdom of Sri Lanka.",
    highlights: ["Temple of the Tooth", "Kandy Lake", "Peradeniya Gardens"],
  },
  {
    slug: "ella",
    lat: 6.8667,
    lng: 81.0466,
    tagline: "Blue trains and nine stone arches.",
    name: "Ella",
    region: "Uva Highlands",
    image: ella,
    blurb: "A laid-back mountain village of waterfalls, viewpoints and the famous Nine Arch Bridge.",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls"],
  },
  {
    slug: "nuwara-eliya",
    lat: 6.9497,
    lng: 80.7891,
    tagline: "Mist, mountains and a slower rhythm.",
    name: "Nuwara Eliya",
    region: "Tea Country",
    image: tea,
    blurb: "Cool climate, colonial bungalows and emerald tea estates stretching to the horizon.",
    highlights: ["Tea factory tours", "Gregory Lake", "Horton Plains"],
  },
  {
    slug: "yala",
    lat: 6.3728,
    lng: 81.5016,
    tagline: "Leopards, elephants and wild coast.",
    name: "Yala",
    region: "Southern Wilds",
    image: yala,
    blurb: "One of the best places on earth to spot leopards, plus elephants, crocodiles and birds.",
    highlights: ["Leopard safari", "Elephant herds", "Coastal lagoons"],
  },
  {
    slug: "galle",
    lat: 6.0269,
    lng: 80.217,
    tagline: "Old walls, ocean air and golden evenings.",
    name: "Galle Fort",
    region: "South Coast",
    image: galle,
    blurb: "A UNESCO-listed Dutch fort of cobbled lanes, boutique cafés and ocean ramparts.",
    highlights: ["Lighthouse walk", "Rampart sunsets", "Boutique shopping"],
  },
  {
    slug: "mirissa",
    lat: 5.9483,
    lng: 80.4716,
    tagline: "Whales, surf and palm-fringed sunsets.",
    name: "Mirissa",
    region: "South Coast",
    image: mirissa,
    blurb: "Crescent beaches, surf breaks and some of the best blue whale watching in the world.",
    highlights: ["Whale watching", "Coconut Tree Hill", "Secret Beach"],
  },
  {
    slug: "koggala",
    lat: 5.9886,
    lng: 80.3283,
    tagline: "Stilt fishermen at golden hour.",
    name: "Koggala",
    region: "South Coast",
    image: stilt,
    blurb: "Watch traditional stilt fishermen balance above the waves at golden hour.",
    highlights: ["Stilt fishermen", "Koggala Lake", "Turtle hatchery"],
  },
];

export type Tour = {
  slug: string;
  name: string;
  days: number;
  priceUsd: number;
  image: string;
  route: string[];
  summary: string;
  includes: string[];
};

export const tours: Tour[] = [
  {
    slug: "classic-ceylon",
    name: "Classic Ceylon",
    days: 7,
    priceUsd: 890,
    image: sigiriya,
    route: ["Colombo", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella"],
    summary: "Ancient kingdoms, sacred temples and the famous hill-country train in one week.",
    includes: ["Private car & driver", "6 nights hotels", "Daily breakfast", "Train tickets"],
  },
  {
    slug: "wild-south",
    name: "Wild South & Beaches",
    days: 5,
    priceUsd: 640,
    image: yala,
    route: ["Colombo", "Yala", "Mirissa", "Galle"],
    summary: "Leopard safaris, whale watching and lazy days on golden southern beaches.",
    includes: ["Jeep safari", "Whale watching", "4 nights hotels", "Airport transfers"],
  },
  {
    slug: "tea-and-trains",
    name: "Tea Trails & Trains",
    days: 4,
    priceUsd: 520,
    image: ella,
    route: ["Kandy", "Nuwara Eliya", "Ella"],
    summary: "Slow travel through the misty highlands, staying in charming tea bungalows.",
    includes: ["Tea factory visit", "Scenic train ride", "3 nights bungalows", "Local guide"],
  },
  {
    slug: "grand-island",
    name: "Grand Island Journey",
    days: 12,
    priceUsd: 1590,
    image: kandy,
    route: ["Negombo", "Anuradhapura", "Sigiriya", "Kandy", "Ella", "Yala", "Galle"],
    summary: "The complete Sri Lanka experience — culture, mountains, wildlife and coast.",
    includes: ["Private chauffeur guide", "11 nights hotels", "All entrance fees", "2 safaris"],
  },
];

export const testimonials = [
  {
    name: "Emma & James",
    from: "London, UK",
    quote:
      "Our driver felt like family by the end. Every hotel, every stop, every meal was perfectly chosen.",
  },
  {
    name: "Lukas Weber",
    from: "Munich, Germany",
    quote: "We saw three leopards in Yala and climbed Sigiriya at sunrise. Unforgettable trip.",
  },
  {
    name: "Priya Nair",
    from: "Sydney, Australia",
    quote: "Smooth from start to finish. The Ella train ride alone was worth the journey.",
  },
];
