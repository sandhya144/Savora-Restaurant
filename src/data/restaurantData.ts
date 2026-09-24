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
  philosophy: "A culinary sanctuary dedicated to ancestral wood-fired alchemy, nocturnal coastal foraging, and the unrepeatable poetry of the harvest season.",
};

export const TASTING_MENUS: TastingMenu[] = [
  {
    id: "nocturne",
    title: "Le Menu Nocturne",
    subtitle: "Eight Movements into Fire, Sea & Forest",
    price: "€380",
    pairingPrice: "€240 Grand Cru Pairing",
    description: "An evocative eight-course progression crafted around the twilight harvest, charcoal embers, and subterranean fermentation.",
    courses: [
      {
        id: "c1",
        courseNumber: "I",
        name: "Brittany Blue Lobster",
        frenchName: "Homard Bleu Flambé aux Aiguilles de Pin",
        description: "Binchotan-seared blue lobster tail, roasted pine needle infusion, fermented green quince purée, sea fennel crisp.",
        provenance: "Wild caught off Roscoff, Brittany coast",
        pairing: "Meursault Premier Cru 'Les Charmes'",
        vintage: "Domaine des Comtes Lafon 2018",
        dietary: ["Shellfish"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "c2",
        courseNumber: "II",
        name: "Glacier 51 Toothfish & Vin Jaune",
        frenchName: "Légine Australe Pochée au Vin Jaune",
        description: "Poached sub-antarctic toothfish, Jura vin jaune emulsion, golden sea urchin roe, caramelized shallot veil.",
        provenance: "Heard Island & McDonald Islands",
        pairing: "Château-Chalon",
        vintage: "Domaine Jean Macle 2015",
        dietary: ["Fish"],
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "c3",
        courseNumber: "III",
        name: "Wild Black Morel & Lichen Broth",
        frenchName: "Morilles des Vosges & Consommé de Lichen",
        description: "Woodland morels filled with roasted chestnut duxelles, 36-hour nocturnal forest lichen consommé, cured egg yolk snow.",
        provenance: "Vosges Massif ancient woodlands",
        pairing: "Corton-Charlemagne Grand Cru",
        vintage: "Bonneau du Martray 2017",
        dietary: ["Vegetarian Available"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "c4",
        courseNumber: "IV",
        name: "Aged Challans Duck & Black Winter Truffle",
        frenchName: "Canard de Challans Rôti au Binchotan",
        description: "28-day dry-aged duck breast over cherry wood smoke, black Melanosporum truffle glaze, smoked elderberry reduction.",
        provenance: "Maison Burgaud, Challans",
        pairing: "Chambolle-Musigny 1er Cru 'Les Amoureuses'",
        vintage: "Domaine Georges Roumier 2016",
        dietary: ["Poultry"],
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "c5",
        courseNumber: "V",
        name: "Wagyu A5 Striploin on White Embers",
        frenchName: "Bœuf Miyazaki A5 aux Braises de Binchotan",
        description: "Charcoal-kissed Miyazaki sirloin, bone marrow emulsion with fermented sansho pepper, smoked shallot petal.",
        provenance: "Miyazaki Prefecture, Japan",
        pairing: "Hermitage 'La Chapelle'",
        vintage: "Paul Jaboulet Aîné 2010",
        dietary: ["Beef"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "c6",
        courseNumber: "VI",
        name: "Frozen Birch Sap & Wild Sorrel",
        frenchName: "Granité de Sève de Bouleau & Oxalis Sauvage",
        description: "Sub-zero birch sap granité, distilled juniper blossom essence, crushed wood sorrel crystals.",
        provenance: "Hand-tapped birch groves, Dalarna",
        pairing: "Champagne Blanc de Blancs Extra Brut",
        vintage: "Jacques Selosse 'Substance'",
        dietary: ["Vegan"],
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "c7",
        courseNumber: "VII",
        name: "Smoked Porcelana Cacao & Roasted Malt",
        frenchName: "Cacao Porcelana Fumé au Bois de Cèdre",
        description: "78% Venezuelan Porcelana cacao ganache, cedar wood smoke, malted barley ice cream, sea salt fleur de sel.",
        provenance: "South of Lake Maracaibo",
        pairing: "Tawny Port 40 Years Old",
        vintage: "Quinta do Noval",
        dietary: ["Dairy"],
        image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "c8",
        courseNumber: "VIII",
        name: "Pine Cone Mignardises & Spun Gold",
        frenchName: "Mignardises d'Épices Rares & Or Fin",
        description: "Infused spruce resin caramels, dark honey pastilles with 24k gold foil, roasted chicory infusion.",
        provenance: "Atelier L'Écrin Confiserie",
        pairing: "Infusion de Racines Sauvages & Poivre de Sichuan",
        vintage: "Artisanal Tisane",
        dietary: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85"
      }
    ]
  },
  {
    id: "solstice",
    title: "Le Solstice d'Hiver",
    subtitle: "Five Movements of Oceanic Purity",
    price: "€290",
    pairingPrice: "€180 Sommelier Curation",
    description: "A focused homage to coastal tides, cold-water shellfish, and wild sea botanicals prepared over ember-kissed stones.",
    courses: [
      {
        id: "s1",
        courseNumber: "I",
        name: "Gillardeau Oyster N° 0",
        frenchName: "Huître Gillardeau Glacée & Granité Champagne",
        description: "Cold-smoked Gillardeau oyster, cucumber dashi granité, sea grape caviar, oscietra sturgeon pearls.",
        provenance: "Marennes-Oléron Basin",
        pairing: "Champagne Grand Cru Millésimé",
        vintage: "Krug 2008",
        dietary: ["Shellfish"],
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "s2",
        courseNumber: "II",
        name: "Scallops from the Bay of Seine",
        frenchName: "Coquilles Saint-Jacques Rôties aux Algues",
        description: "Diver-caught scallops caramelized on cedar plank, dulse seaweed butter, parsnip cloud.",
        provenance: "Bay of Seine, Normandy",
        pairing: "Chablis Grand Cru 'Les Clos'",
        vintage: "Domaine François Raveneau 2019",
        dietary: ["Molluscs"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "s3",
        courseNumber: "III",
        name: "Line-Caught Sea Bass & Black Garlic",
        frenchName: "Bar de Ligne en Écailles Croustillantes",
        description: "Crispy-scaled sea bass, fermented black garlic broth, charred wild leek, finger lime vesicles.",
        provenance: "Saint-Gilles-Croix-de-Vie",
        pairing: "Puligny-Montrachet 1er Cru 'Les Folatières'",
        vintage: "Domaine Leflaive 2020",
        dietary: ["Fish"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "s4",
        courseNumber: "IV",
        name: "Aged Comté 42 Mois & Winter Truffle",
        frenchName: "Comté de Garde 42 Mois Râpé Minute",
        description: "Hand-selected 42-month Comté from Marcel Petite Fort Saint-Antoine, sourdough toast with clover honey, fresh Perigord truffle.",
        provenance: "Haut-Doubs, Jura",
        pairing: "Arbois Vin Jaune",
        vintage: "Jacques Puffeney 2011",
        dietary: ["Dairy"],
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1200&q=85"
      },
      {
        id: "s5",
        courseNumber: "V",
        name: "Meyer Lemon & Smoked Vanilla Soufflé",
        frenchName: "Soufflé Minute au Citron Meyer & Vanille Bleue",
        description: "Molten Meyer lemon soufflé, smoked Blue Vanilla ice cream from Réunion, burnt sugar crown.",
        provenance: "Menton Orchards & Saint-Philippe",
        pairing: "Château d'Yquem Premier Cru Supérieur",
        vintage: "Château d'Yquem 2009",
        dietary: ["Egg", "Dairy"],
        image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85"
      }
    ]
  }
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
    title: "The Primal Hearth",
    subtitle: "Binchotan & Ancient Smoke",
    description: "Fire is not merely our heat source; it is our principal seasoning. We harness pure Japanese oak charcoal and cured cedar woods to reveal volatile terpenes hidden deep within wild game and oceanic marrow.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
  },
  {
    number: "02",
    title: "The Nocturne Harvest",
    subtitle: "Botanical Foraging at Low Tide",
    description: "Every dawn and twilight, our foraging team traverses the misted woodlands of Rambouillet and the rocky granite shelves of Brittany, harvesting sea kale, spruce tips, and rare wood sorrel at peak aromatic potency.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=900&q=80"
  },
  {
    number: "03",
    title: "The Subterranean Vault",
    subtitle: "Four Thousand Living Vintages",
    description: "Beneath Place Vendôme lies our 18th-century limestone cellar, housing pre-phylloxera rarities, biodynamic Grower Champagnes, and legendary Grand Crus aged in silent equilibrium.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80"
  }
];
