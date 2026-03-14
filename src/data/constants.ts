import { Project, ContactInfo } from './types';
import photoParis from '@/assets/photo-paris.jpg';
import photoPaiva from '@/assets/photo-paiva.jpg';
import photoJardimMorro from '@/assets/photo-jardim-morro.jpg';
import photoGaia from '@/assets/photo-gaia.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Portrait Retouch',
    category: 'PHOTOGRAPHY',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    beforeImageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=20&w=800&sepia=1',
    description: 'Tratamento de pele avançado e correção de cor cinematográfica para retrato editorial.',
    downloadable: true,
  },
  {
    id: 'p2',
    title: 'Landscape Edit',
    category: 'PHOTOGRAPHY',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    beforeImageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=10&w=800&grayscale=1',
    description: 'Realce de texturas e HDR para fotografia de paisagem alpina.',
    downloadable: true,
  },
  {
    id: 'p3',
    title: 'Paris by Night',
    category: 'PHOTOGRAPHY',
    imageUrl: photoParis,
    description: 'Fotografia de longa exposição captando os rastos de luz na autoestrada A15 rumo a Paris.',
    downloadable: false,
  },
  {
    id: 'p4',
    title: 'Passadiços do Paiva',
    category: 'PHOTOGRAPHY',
    imageUrl: photoPaiva,
    description: 'A beleza crua do rio Paiva a cortar por entre rochas ancestrais em Arouca, Portugal.',
    downloadable: false,
  },
  {
    id: 'p5',
    title: 'Jardim do Morro',
    category: 'PHOTOGRAPHY',
    imageUrl: photoJardimMorro,
    description: 'Pôr do sol na hora dourada sobre o rio Douro visto do Jardim do Morro, Vila Nova de Gaia.',
    downloadable: false,
  },
  {
    id: 'p6',
    title: 'Gaia Sunset',
    category: 'PHOTOGRAPHY',
    imageUrl: photoGaia,
    description: 'Tons quentes do pôr do sol refletidos no rio Douro com Porto e Gaia à vista.',
    downloadable: false,
  },
  {
    id: '1',
    title: 'Minimalist Signature',
    category: 'ARTS',
    imageUrl: 'https://picsum.photos/400/500?random=1',
    description: 'A professional minimalist signature for executive branding.'
  },
  {
    id: '2',
    title: 'Ocean View Social',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    description: 'Engaging Instagram post for travel agencies.'
  },
  {
    id: '4',
    title: 'Abstract Concept',
    category: 'OTHERS',
    imageUrl: 'https://picsum.photos/400/600?random=4',
    description: 'Experimental design exploring geometric forms.'
  },
  {
    id: '5',
    title: 'Modern Signature V2',
    category: 'ARTS',
    imageUrl: 'https://picsum.photos/400/250?random=5',
    description: 'Sleek signature with thin font styles.'
  },
  {
    id: '6',
    title: 'Fashion Feed',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://picsum.photos/400/450?random=6',
    description: 'Social media kit for high-end fashion brands.'
  },
  {
    id: '10',
    title: 'Foodie Social',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://picsum.photos/400/600?random=10',
    description: 'Deliciously designed feed for restaurant promotions.'
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'filipe@filiperocha.design',
  linkedin: 'https://linkedin.com/in/filiperocha',
  location: 'Lisboa, Portugal'
};

export const ITEMS_PER_PAGE = 6;
