export interface MenuItem {
  id: string;
  courseNumber: string;
  name: string;
  frenchName?: string;
  description: string;
  provenance: string;
  pairing: string;
  vintage: string;
  dietary?: string[];
  image: string;
}

export interface TastingMenu {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  pairingPrice: string;
  description: string;
  courses: MenuItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Atelier' | 'Cuisine' | 'Cellar' | 'Sanctuary';
  caption: string;
  image: string;
  aspectRatio?: string;
  orientation?: 'landscape' | 'portrait';
}

export interface Accolade {
  id: string;
  publication: string;
  quote: string;
  year: string;
  distinction: string;
}

export interface ReservationFormData {
  date: string;
  time: string;
  guests: number;
  experience: 'tasting_menu' | 'private_salon' | 'chefs_counter';
  dietaryNotes: string;
  fullName: string;
  email: string;
  phone: string;
  specialOccasion?: string;
}

