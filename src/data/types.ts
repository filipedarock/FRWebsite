export type Category = 'ANIWALL' | 'PHOTOGRAPHY' | 'ARTS' | 'SOCIAL MEDIA' | 'OTHERS';

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
