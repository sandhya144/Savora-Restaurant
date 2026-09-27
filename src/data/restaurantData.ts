import type { TastingMenu, GalleryItem, Accolade } from '../types';

export const RESTAURANT_INFO = {
  name: "SAVORA",
  tagline: " Where Every Bite Tells a Story.",
  subheadline: "Where Flavor Finds Its Soul",
  michelinStars: 3,
  location: "18 Place Banglore , India",
  openingHours: "Tuesday – Saturday • 19:00 — 23:30",
  privateSalonHours: "Wednesday – Sunday • By Private Appointment",
  sommelier: "Julien de Saint-Hilaire",
  executiveChef: "Alexandre Vaneau",
  philosophy: "At Savora, every bite tells a story — one that begins with wood-fired tradition, draws from the freshness of the coast, and follows the natural rhythm of the seasons.",
};


export const TASTING_MENUS: TastingMenu[] = [
  {
    id: "midnight",
    title: "The Midnight Tasting",
    subtitle: "Eight Courses from India's Most Celebrated Kitchens",
    price: "₹6,800",
    pairingPrice: "₹3,200 Curated Pairing",
    description:
      "An eight-course journey through the signature creations of India's most iconic fine-dining restaurants — from Bukhara's legendary tandoor to Indian Accent's modern Indian artistry and Trèsind's progressive plating.",
    courses: [
      {
        id: "c1",
        courseNumber: "I",
        name: "Daulat ki Chaat",
        localName: "Daulat ki Chaat",
        description:
          "Indian Accent's ethereal frothy milk dessert, light as cloud, scented with saffron and rose, finished with rose-petal chikki and roasted almonds.",
        provenance: "Indian Accent, New Delhi",
        pairing: "Sparkling Wine, Nashik",
        vintage: "Sula Brut 2022",
        dietary: ["Vegetarian", "Dairy"],
        image:
          "https://images.pexels.com/photos/32760898/pexels-photo-32760898.jpeg",
      },
      {
        id: "c2",
        courseNumber: "II",
        name: "Blue Cheese Naan",
        localName: "Blue Cheese Naan",
        description:
          "Indian Accent's cult favourite since day one — a warm naan stuffed with blue cheese, served with a spiced berry chutney.",
        provenance: "Indian Accent, New Delhi",
        pairing: "Chenin Blanc, Nashik",
        vintage: "Fratelli Chenin 2021",
        dietary: ["Vegetarian", "Dairy", "Gluten"],
        image:
          "https://images.pexels.com/photos/10337726/pexels-photo-10337726.jpeg",
      },
      {
        id: "c3",
        courseNumber: "III",
        name: "Dal Bukhara",
        localName: "Dal Bukhara",
        description:
          "Bukhara's legendary black lentils, slow-cooked for over 24 hours with tomato, ginger, butter, and cream — arguably India's most famous dal.",
        provenance: "Bukhara, ITC Maurya, New Delhi",
        pairing: "Chardonnay, Nandi Hills",
        vintage: "Grover Zampa La Reserve 2020",
        dietary: ["Vegetarian", "Dairy"],
        image:
          "https://images.pexels.com/photos/38298121/pexels-photo-38298121.jpeg",
      },
      {
        id: "c4",
        courseNumber: "IV",
        name: "Sikandari Raan",
        localName: "Sikandari Raan",
        description:
          "Bukhara's iconic whole leg of lamb, marinated overnight in raw papaya and spices, then slow-roasted in the tandoor until succulent.",
        provenance: "Bukhara, ITC Maurya, New Delhi",
        pairing: "Shiraz, Indian Reserve",
        vintage: "Fratelli J'Noon Shiraz 2019",
        dietary: ["Lamb"],
        image:
          "https://images.pexels.com/photos/11161475/pexels-photo-11161475.jpeg",
      },
      {
        id: "c5",
        courseNumber: "V",
        name: "Meetha Achaar Pork Ribs",
        localName: "Meetha Achaar Pork Ribs",
        description:
          "Indian Accent's signature pork ribs glazed with sweet mango pickle (meetha achaar), served with green apple for a sweet-tangy finish.",
        provenance: "Indian Accent, New Delhi / Mumbai",
        pairing: "Cabernet Sauvignon, Nashik Valley",
        vintage: "Sula Rasa Cabernet 2018",
        dietary: ["Pork"],
        image:
          "https://images.pexels.com/photos/5305427/pexels-photo-5305427.jpeg",
      },
      {
        id: "c6",
        courseNumber: "VI",
        name: "Deconstructed Dal-Chawal",
        localName: "Dal Chawal",
        description:
          "Trèsind Mumbai's playful fine-dining take on India's comfort food — dal and rice presented in parts and assembled tableside, elevated with tadka and textures.",
        provenance: "Trèsind, Mumbai",
        pairing: "Viognier, Nashik Valley",
        vintage: "Fratelli Sette Viognier 2021",
        dietary: ["Vegetarian", "Dairy"],
        image:
          "https://images.pexels.com/photos/8996219/pexels-photo-8996219.jpeg",
      },
      {
        id: "c7",
        courseNumber: "VII",
        name: "Karavalli Fish Curry",
        localName: "Meen Curry",
        description:
          "Karavalli's celebrated coastal Karnataka-style fish curry — fresh fish simmered in a vibrant coconut-red chilli gravy, served with steamed rice.",
        provenance: "Karavalli, Taj Gateway, Bengaluru",
        pairing: "Sauvignon Blanc, Nashik Valley",
        vintage: "Sula Vineyards Reserve 2022",
        dietary: ["Fish"],
        image:
          "https://images.pexels.com/photos/35532834/pexels-photo-35532834.jpeg",
      },
      {
        id: "c8",
        courseNumber: "VIII",
        name: "Charnamrit Kheer",
        localName: "Charnamrit Kheer",
        description:
          "Trèsind Mumbai's dessert interpretation of the sacred charnamrit — rice kheer infused with saffron, cardamom, nuts, and a touch of rose.",
        provenance: "Trèsind, Mumbai",
        pairing: "Masala Chai Infusion",
        vintage: "House Blend",
        dietary: ["Vegetarian", "Dairy"],
        image:
          "https://images.pexels.com/photos/33430555/pexels-photo-33430555.jpeg",
      },
    ],
  },

  {
    id: "harvest",
    title: "The Harvest Table",
    subtitle: "Five Courses from India's Regional Kitchens",
    price: "₹4,900",
    pairingPrice: "₹2,400 Curated Pairing",
    description:
      "A five-course celebration of regional India — drawing on the tandoor traditions of Bukhara, the coastal spices of Karavalli, and the modern flair of Trèsind and Indian Accent.",
    courses: [
      {
        id: "s1",
        courseNumber: "I",
        name: "Dahi Kebab",
        localName: "Dahi Kebab",
        description:
          "Hung curd and paneer kebabs crisped on the outside, soft within — a Lucknowi classic refined for the fine-dining table.",
        provenance: "Lucknow / Indian Accent style",
        pairing: "Sparkling Wine, Nashik",
        vintage: "Chandon Brut India",
        dietary: ["Vegetarian", "Dairy"],
        image:
          "https://images.pexels.com/photos/16171913/pexels-photo-16171913.jpeg",
      },
      {
        id: "s2",
        courseNumber: "II",
        name: "Paneer Tikka Angara",
        localName: "Paneer Tikka",
        description:
          "Bukhara's well-known vegetarian tandoor classic — paneer marinated in hung curd and spices, charred over live coals.",
        provenance: "Bukhara, ITC Maurya, New Delhi",
        pairing: "Chardonnay, Nandi Hills",
        vintage: "Grover Zampa La Reserve 2020",
        dietary: ["Vegetarian", "Dairy"],
        image:
          "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png",
      },
      {
        id: "s3",
        courseNumber: "III",
        name: "Shorshe Ilish",
        localName: "Ilish Machh in Mustard",
        description:
          "Delicate hilsa gently steamed with yellow mustard, green chilli, turmeric, and mustard oil, capturing the bold coastal flavours of Bengal.",
        provenance: "Bengal",
        pairing: "Riesling, Nashik Valley",
        vintage: "Sula Riesling 2022",
        dietary: ["Fish"],
        image:
          "https://images.pexels.com/photos/35267289/pexels-photo-35267289.jpeg",
      },
      {
        id: "s4",
        courseNumber: "IV",
        name: "Lamb Biryani, Sealed Dough Lid",
        localName: "Dum Biryani",
        description:
          "Trèsind Mumbai's slow-cooked lamb biryani, opened tableside under a sealed dough lid — aromatic basmati layered with saffron, mint, and caramelised onion.",
        provenance: "Trèsind, Mumbai",
        pairing: "Chenin Blanc, Nashik",
        vintage: "Fratelli Sauvignon Blend 2021",
        dietary: ["Lamb"],
        image:
          "https://images.pexels.com/photos/30748996/pexels-photo-30748996.jpeg",
      },
      {
        id: "s5",
        courseNumber: "V",
        name: "Saffron Kulfi Brûlée",
        localName: "Kesar Kulfi",
        description:
          "Traditional saffron kulfi finished with a thin caramelised sugar crust, pistachio, and rose petals — a modern ending to a classic Indian dessert.",
        provenance: "Kashmir & North India",
        pairing: "Late Harvest Dessert Wine",
        vintage: "Fratelli Moscato",
        dietary: ["Vegetarian", "Dairy"],
        image:
          "https://images.pexels.com/photos/37535177/pexels-photo-37535177.jpeg",
      },
    ],
  },
];



export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "The Binchotan Hearth",
    category: "Atelier",
    caption: "Rare white charcoal embers imported from Kishu, burning at 1,000°C with absolute odorless purity.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85",
    orientation: "landscape"
  },
  {
    id: "g2",
    title: "Subterranean Crypt Vintages",
    category: "Cellar",
    caption: "Over 4,200 curated references dating back to 1928, preserved at steady 12°C humidity.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
    orientation: "portrait"
  },
  {
    id: "g3",
    title: "The Nocturne Plating Counter",
    category: "Cuisine",
    caption: "Quiet precision at the pass. Each plate undergoes five microscopic temperature and glaze checks.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=85",
    orientation: "landscape"
  },
  {
    id: "g4",
    title: "Salon L'Alchimiste",
    category: "Sanctuary",
    caption: "Private dining chamber encased in patinated bronze, black volcanic basalt, and velvet acoustics.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
    orientation: "landscape"
  },
  {
    id: "g5",
    title: "Foraging at Dawn",
    category: "Atelier",
    caption: "Coastal sea herbs gathered during low tide in Northern Brittany, delivered same morning.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=85",
    orientation: "portrait"
  },
  {
    id: "g6",
    title: "The Sommelier Pour",
    category: "Cellar",
    caption: "Hand-blown Zalto glassware, decanted precisely according to atmospheric pressure and vintage age.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
    orientation: "landscape"
  }
];

export const ACCOLADES: Accolade[] = [
  {
    id: "a1",
    publication: "MICHELIN GUIDE",
    quote: "Alexandre Vaneau has created an intoxicating nocturne temple. The binchotan-fired lobster and aged duck are moments of pure culinary transcendence.",
    year: "2025 Edition",
    distinction: "Three Michelin Stars"
  },
  {
    id: "a2",
    publication: "THE WORLD'S 50 BEST RESTAURANTS",
    quote: "An extraordinary masterclass in sensory restraint and charcoal poetry. Dining at L'Écrin is not merely eating; it is an unforgettable nocturnal ceremony.",
    year: "Ranked N° 04 Globally",
    distinction: "Highest New Entry & Art of Hospitality Award"
  },
  {
    id: "a3",
    publication: "LE MONDE GASTRONOMIE",
    quote: "The acoustic silence, the warm bronze glow, and the breathtaking precision of each sauce make L'Écrin the defining culinary landmark of our decade.",
    year: "Review by François-Régis Gaudry",
    distinction: "Grand Prix de l'Excellence"
  },
  {
    id: "a4",
    publication: "FINANCIAL TIMES",
    quote: "Where modern Nordic foraging philosophy meets the aristocratic precision of classical French cellarmasters.",
    year: "FT Weekend Review",
    distinction: "Restaurant of the Year"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "The Open Fire",
    subtitle: "Charcoal & Smoke",
    description: "Fire is not just how we cook — it's how we add flavor. We use traditional charcoal and seasoned wood to bring out deep, smoky flavors in everything from meats to vegetables.",
    image: "https://images.pexels.com/photos/5953515/pexels-photo-5953515.jpeg"
  },
  {
    number: "02",
    title: "The Morning Harvest",
    subtitle: "Fresh from Farm and Coast",
    description: "Every morning, our team sources fresh greens, herbs, and seafood from local farms and coastal markets, picked at their peak so every dish tastes as fresh as possible.",
    image: "https://images.pexels.com/photos/7125577/pexels-photo-7125577.jpeg"
  },
  {
    number: "03",
    title: "The Masala Vault",
    subtitle: "Spices, Pickles & Slow Time",
    description: "Deep within Savora lies our spice vault — home to hand-ground masalas, sun-aged pickles, and chutneys left to mature for months. Every blend is made in-house, the old-fashioned way.",
    image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg"
  }
];