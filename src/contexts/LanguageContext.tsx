import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Sidebar
    'sidebar.portfolio': 'Portfolio',
    'sidebar.by': 'Filipe Rocha',
    
    // Nav
    'nav.aniwall': 'ANIWALL',
    'nav.banners': 'BANNERS',
    'nav.others': 'OUTROS',
    'nav.photography': 'FOTOGRAFIA',
    'nav.arts': 'ARTS',
    'nav.social_media': 'SOCIAL MEDIA',
    
    // Theme
    'theme.light': 'Modo Claro',
    'theme.dark': 'Modo Escuro',
    
    // Gallery
    'gallery.loading': 'A carregar a criatividade...',
    
    // Footer
    'footer.rights': '© {year} Filipe Rocha Studio. Todos os direitos reservados.',
    'footer.about': 'Sobre Mim',
    
    // About Me
    'about.subtitle': 'Designer • Gamer • Arte Visual',
    'about.age_suffix': 'anos',
    'about.bio_1': 'Criativo, comunicativo e empático. Apaixonado por carros, natureza e silêncio.',
    'about.bio_2': 'Por vezes introvertido, por outras extrovertido.',
    'about.creative': 'Criativo',
    'about.cars': 'Carros',
    'about.nature': 'Natureza',
    'about.silence': 'Silêncio',
    'about.travel': 'Viajar',
    'about.cinema': 'Cinema',
    'about.photography': 'Fotografia',
    
    // Hobbies
    'hobby.cars': 'Carros',
    'hobby.nature': 'Natureza',
    'hobby.travel': 'Viajar',
    'hobby.cinema': 'Cinema',
    'hobby.photography': 'Fotografia',
    'hobby.silence': 'Silêncio',
    
    // FC Porto
    'club.title': 'Clube do Coração',
    
    // PSN
    'psn.trophies': 'Troféus PSN',
    'psn.platinum': 'Platina',
    'psn.gold': 'Ouro',
    'psn.silver': 'Prata',
    'psn.bronze': 'Bronze',
    'psn.last_platinum': 'Última Platina',
    'psn.completion': 'Conclusão',
    'psn.games_count': '{completed} de {total} jogos',
    'psn.game_library': 'Biblioteca de Jogos',
    'psn.all': 'Todos',
    'psn.platinated': 'Platinados',
    'psn.in_progress': 'Em Progresso',
    
    // Top 5
    'top5.games': 'Jogos',
    'top5.series': 'Séries',
    'top5.movies': 'Filmes',
    'top5.animes': 'Animes',
    
    // Project Modal
    'project.ask_quote': 'Pedir Orçamento',
    'project.before': 'Antes',
    'project.after': 'Depois',
    'project.price': 'Preço sob consulta',
  },
  en: {
    // Sidebar
    'sidebar.portfolio': 'Portfolio',
    'sidebar.by': 'Filipe Rocha',
    
    // Nav
    'nav.aniwall': 'ANIWALL',
    'nav.banners': 'BANNERS',
    'nav.others': 'OTHERS',
    'nav.photography': 'PHOTOGRAPHY',
    'nav.arts': 'ARTS',
    'nav.social_media': 'SOCIAL MEDIA',
    
    // Theme
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    
    // Gallery
    'gallery.loading': 'Loading creativity...',
    
    // Footer
    'footer.rights': '© {year} Filipe Rocha Studio. All rights reserved.',
    'footer.about': 'About Me',
    
    // About Me
    'about.subtitle': 'Designer • Gamer • Visual Art',
    'about.age_suffix': 'years old',
    'about.bio_1': 'Creative, communicative and empathetic. Passionate about cars, nature and silence.',
    'about.bio_2': 'Sometimes introverted, sometimes extroverted.',
    'about.creative': 'Creative',
    'about.cars': 'Cars',
    'about.nature': 'Nature',
    'about.silence': 'Silence',
    'about.travel': 'Travel',
    'about.cinema': 'Cinema',
    'about.photography': 'Photography',
    
    // Hobbies
    'hobby.cars': 'Cars',
    'hobby.nature': 'Nature',
    'hobby.travel': 'Travel',
    'hobby.cinema': 'Cinema',
    'hobby.photography': 'Photography',
    'hobby.silence': 'Silence',
    
    // FC Porto
    'club.title': 'Heart Club',
    
    // PSN
    'psn.trophies': 'PSN Trophies',
    'psn.platinum': 'Platinum',
    'psn.gold': 'Gold',
    'psn.silver': 'Silver',
    'psn.bronze': 'Bronze',
    'psn.last_platinum': 'Last Platinum',
    'psn.completion': 'Completion',
    'psn.games_count': '{completed} of {total} games',
    'psn.game_library': 'Game Library',
    'psn.all': 'All',
    'psn.platinated': 'Platinated',
    'psn.in_progress': 'In Progress',
    
    // Top 5
    'top5.games': 'Games',
    'top5.series': 'Series',
    'top5.movies': 'Movies',
    'top5.animes': 'Animes',
    
    // Project Modal
    'project.ask_quote': 'Ask for Quote',
    'project.before': 'Before',
    'project.after': 'After',
    'project.price': 'Price on request',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
