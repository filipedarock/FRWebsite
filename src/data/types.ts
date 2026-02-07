export type Category = 'ANIWALL' | 'PHOTOGRAPHY' | 'SIGNATURES' | 'SOCIAL MEDIA' | 'BANNERS' | 'OTHERS';

export interface Project {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  beforeImageUrl?: string;
  description: string;
  price?: string;
  buyUrl?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
}
