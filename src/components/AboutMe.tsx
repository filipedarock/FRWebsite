import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Trophy, Gamepad2, Tv, Film, Sparkles, X, User, Star, MapPin, Calendar, Heart, Percent } from 'lucide-react';
import hobbyCars from '@/assets/hobby-cars.jpg';
import hobbyNature from '@/assets/hobby-nature.jpg';
import hobbyTravel from '@/assets/hobby-travel.jpg';
import hobbyCinema from '@/assets/hobby-cinema.jpg';
import hobbyPhotography from '@/assets/hobby-photography.jpg';
import hobbySilence from '@/assets/hobby-silence.jpg';

const HOBBY_PHOTOS = [
  { src: hobbyCars, label: 'Carros' },
  { src: hobbyNature, label: 'Natureza' },
  { src: hobbyTravel, label: 'Viajar' },
  { src: hobbyCinema, label: 'Cinema' },
  { src: hobbyPhotography, label: 'Fotografia' },
  { src: hobbySilence, label: 'Silêncio' },
];

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

const LAST_PLATINUM = {
  name: 'Silent Hill 2',
  coverUrl: '', // Add cover image URL here
  date: '2025-02-15', // Update with actual date
};

const PSN_STATS = {
  totalGames: 45,
  completedGames: 12,
  get completionRate() {
    return Math.round((this.completedGames / this.totalGames) * 100);
  },
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

        {/* Estádio do Dragão - sketch style */}
        <svg viewBox="0 0 400 180" className="w-64 md:w-72 h-auto text-muted-foreground/40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground / road curve */}
          <path d="M10 160 Q80 155, 140 150 Q200 145, 280 148 Q340 150, 390 155" strokeWidth="0.6" />
          <path d="M30 165 Q100 158, 160 155 Q240 150, 300 153 Q360 156, 395 160" strokeWidth="0.5" />
          {/* Stadium base - curved foundation */}
          <path d="M60 148 Q80 145, 100 140 L100 105" strokeWidth="1" />
          <path d="M300 148 Q310 145, 320 140 L320 105" strokeWidth="1" />
          {/* Lower facade - vertical lines (windows/structure) */}
          {Array.from({ length: 18 }).map((_, i) => {
            const x = 108 + i * 11.5;
            return <line key={`facade-${i}`} x1={x} y1={140 - Math.sin((i / 17) * Math.PI) * 5} x2={x} y2={110 - Math.sin((i / 17) * Math.PI) * 8} strokeWidth="0.7" opacity={0.6 + Math.random() * 0.3} />;
          })}
          {/* Lower wall outline */}
          <path d="M100 140 Q150 135, 210 133 Q270 135, 320 140" strokeWidth="0.9" />
          <path d="M95 110 Q150 103, 210 100 Q270 103, 325 110" strokeWidth="0.9" />
          {/* Upper structure - stands */}
          <path d="M85 105 Q90 95, 100 90 L100 70" strokeWidth="1" />
          <path d="M320 105 Q325 95, 330 90 L330 70" strokeWidth="1" />
          {/* Horizontal bands on upper structure */}
          <path d="M100 85 Q210 75, 320 85" strokeWidth="0.6" />
          <path d="M100 95 Q210 87, 320 95" strokeWidth="0.6" />
          {/* Roof - characteristic sweeping canopy */}
          <path d="M70 72 Q100 60, 140 52 Q210 42, 280 52 Q320 60, 350 72" strokeWidth="1.4" />
          {/* Roof truss/lattice structure */}
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 105 + i * 18;
            const topY = 52 + Math.abs(i - 5.5) * 2.2;
            const bottomY = 70 + Math.abs(i - 5.5) * 1.5;
            return <line key={`truss-${i}`} x1={x} y1={topY} x2={x} y2={bottomY} strokeWidth="0.5" opacity="0.5" />;
          })}
          {/* Cross-bracing on roof */}
          <path d="M105 58 L125 66 L145 55 L165 65 L185 53 L205 63 L225 52 L245 62 L265 54 L285 64 L305 58 L325 68" strokeWidth="0.4" opacity="0.4" />
          {/* Dragão silhouette (dragon) at center entrance */}
          <path d="M205 130 Q208 125, 210 120 Q212 118, 215 120 Q213 125, 212 128 Q210 132, 207 133" strokeWidth="0.6" opacity="0.7" />
          {/* Entrance/rotunda at bottom */}
          <ellipse cx="210" cy="155" rx="15" ry="8" strokeWidth="0.7" />
          {/* Landscape hints - trees */}
          <path d="M50 150 Q48 145, 50 140 Q52 145, 50 150" strokeWidth="0.5" opacity="0.3" />
          <path d="M345 145 Q343 140, 345 135 Q347 140, 345 145" strokeWidth="0.5" opacity="0.3" />
          <path d="M355 148 Q353 143, 355 138 Q357 143, 355 148" strokeWidth="0.5" opacity="0.3" />
          {/* Parking lines hint */}
          <line x1="20" y1="165" x2="45" y2="162" strokeWidth="0.3" opacity="0.3" />
          <line x1="25" y1="168" x2="50" y2="165" strokeWidth="0.3" opacity="0.3" />
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
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            ✈️ Viajar
          </Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            🎬 Cinema
          </Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            📸 Fotografia
          </Badge>
        </div>

        {/* Hobby Photos Grid - Instagram style */}
        <div className="grid grid-cols-3 gap-1.5 max-w-sm mx-auto w-full">
          {HOBBY_PHOTOS.map((hobby) => (
            <div key={hobby.label} className="group relative aspect-square overflow-hidden rounded-sm">
              <img
                src={hobby.src}
                alt={hobby.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-[9px] tracking-[0.2em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {hobby.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FC Porto */}
      <div className="flex items-center justify-center gap-4 mb-10 py-5 border-y border-border">
        <img src="/images/fcporto.svg" alt="FC Porto" className="w-[70px] h-[70px] object-contain" />
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

        {/* Last Platinum & Completion Rate */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 max-w-lg mx-auto">
          {/* Last Platinum */}
          <div className="flex items-center gap-3 border border-border rounded-sm p-3 bg-card flex-1 w-full">
            <div className="w-12 h-16 rounded-sm bg-muted flex items-center justify-center overflow-hidden shrink-0">
              {LAST_PLATINUM.coverUrl ? (
                <img src={LAST_PLATINUM.coverUrl} alt={LAST_PLATINUM.name} className="w-full h-full object-cover" />
              ) : (
                <Gamepad2 className="w-5 h-5 text-muted-foreground/50" />
              )}
            </div>
            <div>
              <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground">Última Platina</p>
              <p className="text-[11px] font-semibold text-foreground">{LAST_PLATINUM.name}</p>
              <p className="text-[9px] text-muted-foreground">{LAST_PLATINUM.date}</p>
            </div>
          </div>

          {/* Completion Rate */}
          <div className="border border-border rounded-sm p-3 bg-card text-center flex-1 w-full">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Percent className="w-3 h-3 text-muted-foreground" />
              <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground">Conclusão</p>
            </div>
            <p className="text-xl font-bold text-foreground">{PSN_STATS.completionRate}%</p>
            <p className="text-[9px] text-muted-foreground">{PSN_STATS.completedGames} de {PSN_STATS.totalGames} jogos</p>
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
