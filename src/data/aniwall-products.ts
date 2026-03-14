import { AniWallProduct } from './types';

import dnPoster01 from '@/assets/aniwall/dn-poster-01.png';
import dnPoster02 from '@/assets/aniwall/dn-poster-02.png';
import dnPhone01 from '@/assets/aniwall/dn-phone-01.png';

import dbPoster01 from '@/assets/aniwall/db-poster-01.png';
import dbPoster02 from '@/assets/aniwall/db-poster-02.png';
import dbDetail01 from '@/assets/aniwall/db-detail-01.png';

import dsPoster01 from '@/assets/aniwall/ds-poster-01.png';
import dsPoster02 from '@/assets/aniwall/ds-poster-02.png';

import hkPoster01 from '@/assets/aniwall/hk-poster-01.png';
import hkPoster02 from '@/assets/aniwall/hk-poster-02.png';

const WHATSAPP = '351912345678';

export const ANIWALL_PRODUCTS: AniWallProduct[] = [
  {
    id: 'dn',
    title: 'Death Note',
    subtitle: 'Poster & Phone Case Collection',
    images: [dnPoster01, dnPoster02, dnPhone01],
    description: 'Coleção exclusiva Death Note com poster decorativo e capa de telemóvel. Design minimalista com Ryuk e L.',
    digitalPrice: 2,
    frameSizes: ['A5', 'A4'],
    whatsappNumber: WHATSAPP,
  },
  {
    id: 'db',
    title: 'Dragon Ball',
    subtitle: 'Poster Collection',
    images: [dbPoster01, dbPoster02, dbDetail01],
    description: 'Poster épico Dragon Ball reunindo todos os personagens icónicos. Disponível em poster emoldurado e impressão digital.',
    digitalPrice: 2,
    frameSizes: ['A5', 'A4'],
    whatsappNumber: WHATSAPP,
  },
  {
    id: 'ds',
    title: 'Demon Slayer',
    subtitle: 'Kimetsu no Yaiba Collection',
    images: [dsPoster01, dsPoster02],
    description: 'Coleção Demon Slayer com os pilares e personagens principais. Arte premium para decoração.',
    digitalPrice: 2,
    frameSizes: ['A5', 'A4'],
    whatsappNumber: WHATSAPP,
  },
  {
    id: 'hk',
    title: 'Haikyuu!!',
    subtitle: 'Karasuno Collection',
    images: [hkPoster01, hkPoster02],
    description: 'Poster Haikyuu!! com a equipa Karasuno completa. Design vibrante em tons laranja.',
    digitalPrice: 2,
    frameSizes: ['A5', 'A4'],
    whatsappNumber: WHATSAPP,
  },
];
