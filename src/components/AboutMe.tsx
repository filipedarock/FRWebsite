import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Trophy, Gamepad2, Tv, Film, Sparkles, Shield, X, User, Star, MapPin, Calendar, Heart } from 'lucide-react';

const BIRTHDAY = new Date(1998, 5, 14); // June 14, 1998

const getAge = () => {
  const today = new Date();
  let age = today.getFullYear() - BIRTHDAY.getFullYear();
  const monthDiff = today.getMonth() - BIRTHDAY.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < BIRTHDAY.getDate())) {
    age--;
  }
  return age;
};

const PSN_TROPHIES = {
  platinum: 12,
  gold: 87,
  silver: 210,
  bronze: 540,
};

const FAVORITES = {
  games: [
    { name: 'The Last of Us Series', emoji: '🎮' },
    { name: 'God of War Series', emoji: '⚔️' },
    { name: 'Alan Wake 2', emoji: '🔦' },
    { name: 'Silent Hill 2', emoji: '👻' },
    { name: 'Dragon Ball Sparking Zero', emoji: '🐉' },
  ],
  series: [
    { name: 'Breaking Bad', emoji: '🧪' },
    { name: 'Stranger Things', emoji: '🔦' },
    { name: 'Vikings', emoji: '⚔️' },
    { name: 'Bates Motel', emoji: '🏨' },
    { name: 'Heroes', emoji: '🦸' },
  ],
  movies: [
    { name: 'The Blind Side', emoji: '🏈' },
    { name: 'Gladiator', emoji: '⚔️' },
    { name: 'Batman The Dark Knight Series', emoji: '🦇' },
    { name: 'Toy Story Series', emoji: '🧸' },
    { name: 'Ratatouille', emoji: '🐀' },
  ],
  animes: [
    { name: 'Dragon Ball Series', emoji: '🐉' },
    { name: 'Death Note', emoji: '📓' },
    { name: 'Naruto Series', emoji: '🍥' },
    { name: 'Demon Slayer', emoji: '🗡️' },
    { name: 'Kuroko No Basket', emoji: '🏀' },
  ],
};

const SECTIONS = [
  { key: 'games' as const, label: 'Jogos', icon: Gamepad2, color: 'from-blue-500 to-indigo-600' },
  { key: 'series' as const, label: 'Séries', icon: Tv, color: 'from-emerald-500 to-teal-600' },
  { key: 'movies' as const, label: 'Filmes', icon: Film, color: 'from-amber-500 to-orange-600' },
  { key: 'animes' as const, label: 'Animes', icon: Sparkles, color: 'from-pink-500 to-rose-600' },
];

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const age = useMemo(() => getAge(), []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-semibold text-muted-foreground hover:text-foreground transition-all duration-500"
      >
        <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:w-12 group-hover:bg-foreground transition-all duration-500" />
        <User className="w-3.5 h-3.5" />
        Sobre Mim
        <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:w-12 group-hover:bg-foreground transition-all duration-500" />
      </button>
    );
  }

  return (
    <div className="w-full relative animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-0 top-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center mb-3">
          <User className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-display text-lg md:text-xl italic text-foreground">Filipe Rocha</h3>
        <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Designer • Gamer • Arte Visual</p>
      </div>

      {/* Location, Age & Bio */}
      <div className="flex flex-col items-center gap-5 mb-10 py-6 border-y border-border">
        {/* Porto SVG Bridge + Location */}
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-[11px] font-medium text-foreground">Porto, Portugal</span>
            <span className="text-lg">🇵🇹</span>
          </div>
        </div>

        {/* Estádio do Dragão vector */}
        <svg viewBox="0 0 260 90" className="w-52 h-18 text-muted-foreground/30" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Stadium base/field */}
          <ellipse cx="130" cy="60" rx="95" ry="18" strokeWidth="1.5" className="text-blue-500/30" stroke="currentColor" />
          {/* Stadium structure - left stand */}
          <path d="M40 60 L40 30 Q45 22, 60 20 L60 60" strokeWidth="1" />
          <path d="M45 35 L55 35" strokeWidth="0.8" />
          <path d="M45 40 L55 40" strokeWidth="0.8" />
          <path d="M45 45 L55 45" strokeWidth="0.8" />
          {/* Stadium structure - right stand */}
          <path d="M200 60 L200 30 Q205 22, 220 20 L220 60" strokeWidth="1" />
          <path d="M205 35 L215 35" strokeWidth="0.8" />
          <path d="M205 40 L215 40" strokeWidth="0.8" />
          <path d="M205 45 L215 45" strokeWidth="0.8" />
          {/* Stadium roof arches */}
          <path d="M35 30 Q70 5, 130 8 Q190 5, 225 30" strokeWidth="1.5" />
          {/* Roof supports */}
          <line x1="60" y1="20" x2="70" y2="12" strokeWidth="0.8" />
          <line x1="100" y1="14" x2="100" y2="10" strokeWidth="0.8" />
          <line x1="130" y1="12" x2="130" y2="8" strokeWidth="0.8" />
          <line x1="160" y1="14" x2="160" y2="10" strokeWidth="0.8" />
          <line x1="200" y1="20" x2="190" y2="12" strokeWidth="0.8" />
          {/* Center field line */}
          <line x1="130" y1="45" x2="130" y2="75" strokeWidth="0.5" strokeDasharray="2 2" className="text-blue-400/20" stroke="currentColor" />
          {/* Field grass lines */}
          <path d="M70 55 L190 55" strokeWidth="0.4" strokeDasharray="4 3" className="text-emerald-400/20" stroke="currentColor" />
          <path d="M60 60 L200 60" strokeWidth="0.4" strokeDasharray="4 3" className="text-emerald-400/20" stroke="currentColor" />
          <path d="M70 65 L190 65" strokeWidth="0.4" strokeDasharray="4 3" className="text-emerald-400/20" stroke="currentColor" />
        </svg>

        {/* Age */}
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] md:text-[11px] text-foreground font-medium">{age} anos</span>
        </div>

        {/* Short Bio */}
        <p className="text-[10px] md:text-[11px] leading-relaxed text-muted-foreground text-center max-w-md">
          Criativo, comunicativo e empático. Apaixonado por carros, natureza e silêncio.
          <br />
          Por vezes introvertido, por outras extrovertido.
        </p>

        {/* Trait Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            <Heart className="w-2.5 h-2.5 mr-1" /> Criativo
          </Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            🚗 Carros
          </Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            🌿 Natureza
          </Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            🤫 Silêncio
          </Badge>
        </div>
      </div>

      {/* FC Porto */}
      <div className="flex items-center justify-center gap-4 mb-10 py-5 border-y border-border">
        <img src="/images/fcporto.svg" alt="FC Porto" className="w-[50px] h-[50px] object-contain" />
        <div className="text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-1">Clube do Coração</p>
          <p className="font-display text-lg italic text-foreground">FC Porto</p>
        </div>
        <div className="flex gap-1">
          <Badge className="bg-blue-600 text-white border-blue-600 text-[8px] tracking-wider">
            💙 Portista
          </Badge>
          <Badge className="bg-blue-800 text-white border-blue-800 text-[8px] tracking-wider">
            🐉 Dragão
          </Badge>
        </div>
      </div>

      {/* PSN Trophies */}
      <div className="mb-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Trophy className="w-4 h-4 text-muted-foreground" />
          <p className="text-[9px] tracking-[0.4em] uppercase font-semibold text-muted-foreground">Troféus PSN</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto">
          <div className="group text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="text-2xl mb-1">🏆</div>
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.platinum}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Platina</p>
          </div>
          <div className="group text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="text-2xl mb-1">🥇</div>
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.gold}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Ouro</p>
          </div>
          <div className="group text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="text-2xl mb-1">🥈</div>
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.silver}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Prata</p>
          </div>
          <div className="group text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="text-2xl mb-1">🥉</div>
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.bronze}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Bronze</p>
          </div>
        </div>
      </div>

      {/* Top 5 Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {SECTIONS.map(({ key, label, icon: Icon, color }) => (
          <div key={key} className="border border-border rounded-sm p-5 hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase font-semibold text-muted-foreground">
                Top 5 {label}
              </p>
            </div>
            <div className="space-y-2">
              {FAVORITES[key].map((item, idx) => (
                <div key={item.name} className={`flex items-center gap-3 group rounded-sm px-2 py-1.5 -mx-2 transition-all duration-300 ${idx === 0 ? 'bg-gradient-to-r from-yellow-500/10 to-amber-500/5 border border-yellow-500/20' : ''}`}>
                  <span className={`text-[9px] font-bold w-4 text-right ${idx === 0 ? 'text-yellow-500' : 'text-muted-foreground/50'}`}>
                    {idx === 0 ? '★' : idx + 1}
                  </span>
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-[10px] md:text-[11px] font-medium group-hover:text-foreground transition-colors duration-300 ${idx === 0 ? 'text-foreground' : 'text-foreground/80'}`}>
                      {item.name}
                    </span>
                    <span className="text-sm">{item.emoji}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
