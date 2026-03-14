export type Category = 'ANIWALL' | 'PHOTOGRAPHY' | 'ARTS' | 'SOCIAL MEDIA' | 'OTHERS';

export interface AniWallProduct {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  description: string;
  digitalPrice: number; // e.g. 2 (euros)
  frameSizes: string[]; // e.g. ['A4', 'A5']
  whatsappNumber: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  beforeImageUrl?: string;
  description: string;
  price?: string;
  buyUrl?: string;
  downloadable?: boolean;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
}
