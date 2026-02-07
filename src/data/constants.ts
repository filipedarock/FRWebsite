import { Project, ContactInfo } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'a1',
    title: 'Poster Minimalista Anime',
    category: 'ANIWALL',
    imageUrl: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800',
    description: 'Ilustração exclusiva de alta qualidade para decoração moderna.',
    price: 'Preço sob consulta',
    buyUrl: 'https://wa.me/351912345678?text=Olá!%20Gostaria%20de%20pedir%20um%20orçamento%20para%20o%20Poster%20Minimalista%20Anime.'
  },
  {
    id: 'a2',
    title: 'Quadro Canvas Cyberpunk',
    category: 'ANIWALL',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800',
    description: 'Impressão em canvas com cores vibrantes e acabamento premium.',
    price: 'Preço sob consulta',
    buyUrl: 'https://wa.me/351912345678?text=Olá!%20Gostaria%20de%20pedir%20um%20orçamento%20para%20o%20Quadro%20Canvas%20Cyberpunk.'
  },
  {
    id: 'a3',
    title: 'Coleção Retrô Gaming',
    category: 'ANIWALL',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    description: 'Set de 3 posters celebrando a era de ouro dos videojogos.',
    price: 'Preço sob consulta',
    buyUrl: 'https://wa.me/351912345678?text=Olá!%20Gostaria%20de%20pedir%20um%20orçamento%20para%20a%20Coleção%20Retrô%20Gaming.'
  },
  {
    id: 'p1',
    title: 'Portrait Retouch',
    category: 'PHOTOGRAPHY',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    beforeImageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=20&w=800&sepia=1',
    description: 'Tratamento de pele avançado e correção de cor cinematográfica para retrato editorial.'
  },
  {
    id: 'p2',
    title: 'Landscape Edit',
    category: 'PHOTOGRAPHY',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    beforeImageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=10&w=800&grayscale=1',
    description: 'Realce de texturas e HDR para fotografia de paisagem alpina.'
  },
  {
    id: '1',
    title: 'Minimalist Signature',
    category: 'SIGNATURES',
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
    id: '3',
    title: 'Tech Banner 2024',
    category: 'BANNERS',
    imageUrl: 'https://picsum.photos/400/400?random=3',
    description: 'High-conversion banner for a tech product launch.'
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
    category: 'SIGNATURES',
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
    id: '7',
    title: 'Event Banner',
    category: 'BANNERS',
    imageUrl: 'https://picsum.photos/400/350?random=7',
    description: 'Vibrant banner for a summer music festival.'
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
