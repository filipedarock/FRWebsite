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
    { name: 'The Last of Us Part II', emoji: '🎮' },
    { name: 'God of War Ragnarök', emoji: '⚔️' },
    { name: 'Red Dead Redemption 2', emoji: '🤠' },
    { name: 'Ghost of Tsushima', emoji: '🗡️' },
    { name: 'Horizon Forbidden West', emoji: '🏹' },
  ],
  series: [
    { name: 'Breaking Bad', emoji: '🧪' },
    { name: 'Game of Thrones', emoji: '👑' },
    { name: 'Stranger Things', emoji: '🔦' },
    { name: 'The Witcher', emoji: '🐺' },
    { name: 'Peaky Blinders', emoji: '🎩' },
  ],
  movies: [
    { name: 'Interstellar', emoji: '🚀' },
    { name: 'The Dark Knight', emoji: '🦇' },
    { name: 'Inception', emoji: '💭' },
    { name: 'Gladiator', emoji: '⚔️' },
    { name: 'Pulp Fiction', emoji: '🎬' },
  ],
  animes: [
    { name: 'Attack on Titan', emoji: '⚔️' },
    { name: 'Death Note', emoji: '📓' },
    { name: 'Naruto Shippuden', emoji: '🍥' },
    { name: 'One Piece', emoji: '🏴‍☠️' },
    { name: 'Demon Slayer', emoji: '🗡️' },
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

        {/* Porto geographic silhouette */}
        <svg viewBox="0 0 240 80" className="w-48 h-16 text-muted-foreground/30" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* River Douro */}
          <path d="M0 50 C30 48, 60 52, 90 46 C120 40, 150 44, 180 42 C200 41, 220 45, 240 43" strokeWidth="2" className="text-blue-400/40" stroke="currentColor" />
          {/* Porto city skyline - north bank */}
          <path d="M20 50 L20 32 L28 28 L28 50" strokeWidth="1" /> {/* Clérigos tower */}
          <path d="M35 50 L35 36 L55 36 L55 50" strokeWidth="1" /> {/* buildings */}
          <path d="M60 50 L60 30 L65 24 L70 30 L70 50" strokeWidth="1" /> {/* church */}
          <path d="M75 50 L75 38 L90 38 L90 50" strokeWidth="1" /> {/* Ribeira */}
          <path d="M95 50 L95 34 L105 34 L105 50" strokeWidth="1" />
          <path d="M110 50 L110 40 L125 40 L125 50" strokeWidth="1" />
          {/* D. Luís bridge arch */}
          <path d="M50 50 Q100 20, 150 50" strokeWidth="1.5" strokeDasharray="none" />
          <line x1="75" y1="38" x2="75" y2="50" strokeWidth="0.8" />
          <line x1="100" y1="28" x2="100" y2="50" strokeWidth="0.8" />
          <line x1="125" y1="38" x2="125" y2="50" strokeWidth="0.8" />
          {/* Gaia side */}
          <path d="M145 50 L145 42 L160 42 L160 50" strokeWidth="1" />
          <path d="M165 50 L165 38 L180 38 L180 50" strokeWidth="1" />
          <path d="M185 50 L185 44 L200 44 L200 50" strokeWidth="1" />
          {/* Water reflection dots */}
          <circle cx="60" cy="56" r="1" fill="currentColor" className="text-blue-400/20" />
          <circle cx="100" cy="58" r="1" fill="currentColor" className="text-blue-400/20" />
          <circle cx="140" cy="55" r="1" fill="currentColor" className="text-blue-400/20" />
          <circle cx="180" cy="57" r="1" fill="currentColor" className="text-blue-400/20" />
        </svg>

        {/* Age */}
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] md:text-[11px] text-foreground font-medium">{age} anos</span>
        </div>

        {/* Short Bio */}
        <p className="text-[10px] md:text-[11px] leading-relaxed text-muted-foreground text-center max-w-md">
          Criativo, comunicativo e empático. Apaixonado por carros, natureza e silêncio.
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
        <Shield className="w-6 h-6 text-blue-600" />
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
                <div key={item.name} className="flex items-center gap-3 group">
                  <span className="text-[9px] font-bold text-muted-foreground/50 w-4 text-right">
                    {idx + 1}
                  </span>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-[10px] md:text-[11px] font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="text-sm">{item.emoji}</span>
                  </div>
                  {idx === 0 && (
                    <Badge variant="outline" className="text-[7px] tracking-wider px-1.5 py-0 h-4 border-foreground/20">
                      <Star className="w-2.5 h-2.5 mr-0.5" /> FAV
                    </Badge>
                  )}
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
