import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Trophy, Gamepad2, Tv, Film, Sparkles, X, User, Star, MapPin, Calendar, Heart, Percent, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GAMES_LIBRARY, getGamesStats } from '@/data/games';
import hobbyCars from '@/assets/hobby-cars.jpg';
import hobbyNature from '@/assets/hobby-nature.jpg';
import hobbyTravel from '@/assets/hobby-travel.jpg';
import hobbyCinema from '@/assets/hobby-cinema.jpg';
import hobbyPhotography from '@/assets/hobby-photography.jpg';
import hobbySilence from '@/assets/hobby-silence.jpg';
import platinumTrophy from '@/assets/platinum-trophy.png';

const BIRTHDAY = new Date(1998, 5, 14);

const getAge = () => {
  const today = new Date();
  let age = today.getFullYear() - BIRTHDAY.getFullYear();
  const monthDiff = today.getMonth() - BIRTHDAY.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < BIRTHDAY.getDate())) age--;
  return age;
};

const PSN_TROPHIES = {
  platinum: 29,
  gold: 87,
  silver: 210,
  bronze: 540,
};

const LAST_PLATINUM = {
  name: 'Silent Hill 2',
  coverUrl: '',
  date: '2025-02-15',
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

type GamesFilter = 'all' | 'platinum' | 'progress';

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gamesFilter, setGamesFilter] = useState<GamesFilter>('all');
  const { t } = useLanguage();
  const age = useMemo(() => getAge(), []);
  const gamesStats = useMemo(() => getGamesStats(), []);

  const HOBBY_PHOTOS = [
    { src: hobbyCars, label: t('hobby.cars') },
    { src: hobbyNature, label: t('hobby.nature') },
    { src: hobbyTravel, label: t('hobby.travel') },
    { src: hobbyCinema, label: t('hobby.cinema') },
    { src: hobbyPhotography, label: t('hobby.photography') },
    { src: hobbySilence, label: t('hobby.silence') },
  ];

  const SECTIONS = [
    { key: 'games' as const, label: t('top5.games'), icon: Gamepad2, color: 'from-blue-500 to-indigo-600' },
    { key: 'series' as const, label: t('top5.series'), icon: Tv, color: 'from-emerald-500 to-teal-600' },
    { key: 'movies' as const, label: t('top5.movies'), icon: Film, color: 'from-amber-500 to-orange-600' },
    { key: 'animes' as const, label: t('top5.animes'), icon: Sparkles, color: 'from-pink-500 to-rose-600' },
  ];

  const filteredGames = useMemo(() => {
    const sorted = [...GAMES_LIBRARY].sort((a, b) => a.name.localeCompare(b.name));
    if (gamesFilter === 'platinum') return sorted.filter(g => g.hasPlatinum);
    if (gamesFilter === 'progress') return sorted.filter(g => !g.hasPlatinum);
    return sorted;
  }, [gamesFilter]);

  const completionRate = Math.round((gamesStats.platinumGames / gamesStats.totalGames) * 100);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-semibold text-muted-foreground hover:text-foreground transition-all duration-500"
      >
        <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:w-12 group-hover:bg-foreground transition-all duration-500" />
        <User className="w-3.5 h-3.5" />
        {t('footer.about')}
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
        <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">{t('about.subtitle')}</p>
      </div>

      {/* Location, Age & Bio */}
      <div className="flex flex-col items-center gap-5 mb-10 py-6 border-y border-border">
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-[11px] font-medium text-foreground">Porto, Portugal</span>
            <span className="text-lg">🇵🇹</span>
          </div>
        </div>

        {/* Estádio do Dragão */}
        <svg viewBox="0 0 400 180" className="w-64 md:w-72 h-auto text-muted-foreground/40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 160 Q80 155, 140 150 Q200 145, 280 148 Q340 150, 390 155" strokeWidth="0.6" />
          <path d="M30 165 Q100 158, 160 155 Q240 150, 300 153 Q360 156, 395 160" strokeWidth="0.5" />
          <path d="M60 148 Q80 145, 100 140 L100 105" strokeWidth="1" />
          <path d="M300 148 Q310 145, 320 140 L320 105" strokeWidth="1" />
          {Array.from({ length: 18 }).map((_, i) => {
            const x = 108 + i * 11.5;
            return <line key={`facade-${i}`} x1={x} y1={140 - Math.sin((i / 17) * Math.PI) * 5} x2={x} y2={110 - Math.sin((i / 17) * Math.PI) * 8} strokeWidth="0.7" opacity={0.6 + Math.random() * 0.3} />;
          })}
          <path d="M100 140 Q150 135, 210 133 Q270 135, 320 140" strokeWidth="0.9" />
          <path d="M95 110 Q150 103, 210 100 Q270 103, 325 110" strokeWidth="0.9" />
          <path d="M85 105 Q90 95, 100 90 L100 70" strokeWidth="1" />
          <path d="M320 105 Q325 95, 330 90 L330 70" strokeWidth="1" />
          <path d="M100 85 Q210 75, 320 85" strokeWidth="0.6" />
          <path d="M100 95 Q210 87, 320 95" strokeWidth="0.6" />
          <path d="M70 72 Q100 60, 140 52 Q210 42, 280 52 Q320 60, 350 72" strokeWidth="1.4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 105 + i * 18;
            const topY = 52 + Math.abs(i - 5.5) * 2.2;
            const bottomY = 70 + Math.abs(i - 5.5) * 1.5;
            return <line key={`truss-${i}`} x1={x} y1={topY} x2={x} y2={bottomY} strokeWidth="0.5" opacity="0.5" />;
          })}
          <path d="M105 58 L125 66 L145 55 L165 65 L185 53 L205 63 L225 52 L245 62 L265 54 L285 64 L305 58 L325 68" strokeWidth="0.4" opacity="0.4" />
          <path d="M205 130 Q208 125, 210 120 Q212 118, 215 120 Q213 125, 212 128 Q210 132, 207 133" strokeWidth="0.6" opacity="0.7" />
          <ellipse cx="210" cy="155" rx="15" ry="8" strokeWidth="0.7" />
          <path d="M50 150 Q48 145, 50 140 Q52 145, 50 150" strokeWidth="0.5" opacity="0.3" />
          <path d="M345 145 Q343 140, 345 135 Q347 140, 345 145" strokeWidth="0.5" opacity="0.3" />
          <path d="M355 148 Q353 143, 355 138 Q357 143, 355 148" strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="165" x2="45" y2="162" strokeWidth="0.3" opacity="0.3" />
          <line x1="25" y1="168" x2="50" y2="165" strokeWidth="0.3" opacity="0.3" />
        </svg>

        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] md:text-[11px] text-foreground font-medium">{age} {t('about.age_suffix')}</span>
        </div>

        <p className="text-[10px] md:text-[11px] leading-relaxed text-muted-foreground text-center max-w-md">
          {t('about.bio_1')}
          <br />
          {t('about.bio_2')}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">
            <Heart className="w-2.5 h-2.5 mr-1" /> {t('about.creative')}
          </Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">🚗 {t('about.cars')}</Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">🌿 {t('about.nature')}</Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">🤫 {t('about.silence')}</Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">✈️ {t('about.travel')}</Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">🎬 {t('about.cinema')}</Badge>
          <Badge variant="outline" className="text-[8px] tracking-wider border-foreground/20">📸 {t('about.photography')}</Badge>
        </div>

        <div className="grid grid-cols-3 gap-1.5 max-w-sm mx-auto w-full">
          {HOBBY_PHOTOS.map((hobby) => (
            <div key={hobby.label} className="group relative aspect-square overflow-hidden rounded-sm">
              <img src={hobby.src} alt={hobby.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-[9px] tracking-[0.2em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{hobby.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FC Porto */}
      <div className="flex items-center justify-center gap-4 mb-10 py-5 border-y border-border">
        <img src="/images/fcporto.svg" alt="FC Porto" className="w-[70px] h-[70px] object-contain" />
        <div className="text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-1">{t('club.title')}</p>
          <p className="font-display text-lg italic text-foreground">FC Porto</p>
        </div>
        <div className="flex gap-1">
          <Badge className="bg-blue-600 text-white border-blue-600 text-[8px] tracking-wider">💙 Portista</Badge>
          <Badge className="bg-blue-800 text-white border-blue-800 text-[8px] tracking-wider">🐉 Dragão</Badge>
        </div>
      </div>

      {/* PSN Trophies */}
      <div className="mb-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Trophy className="w-4 h-4 text-muted-foreground" />
          <p className="text-[9px] tracking-[0.4em] uppercase font-semibold text-muted-foreground">{t('psn.trophies')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto">
          <div className="text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <img src={platinumTrophy} alt="Platinum Trophy" className="w-7 h-7 object-contain mb-1" />
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.platinum}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{t('psn.platinum')}</p>
          </div>
          <div className="text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="text-2xl mb-1">🥇</div>
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.gold}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{t('psn.gold')}</p>
          </div>
          <div className="text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="text-2xl mb-1">🥈</div>
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.silver}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{t('psn.silver')}</p>
          </div>
          <div className="text-center py-4 px-3 border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 bg-card">
            <div className="text-2xl mb-1">🥉</div>
            <p className="text-xl font-bold text-foreground">{PSN_TROPHIES.bronze}</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{t('psn.bronze')}</p>
          </div>
        </div>

        {/* Last Platinum & Completion Rate */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 max-w-lg mx-auto">
          <div className="flex items-center gap-3 border border-border rounded-sm p-3 bg-card flex-1 w-full">
            <div className="w-12 h-16 rounded-sm bg-muted flex items-center justify-center overflow-hidden shrink-0">
              {LAST_PLATINUM.coverUrl ? (
                <img src={LAST_PLATINUM.coverUrl} alt={LAST_PLATINUM.name} className="w-full h-full object-cover" />
              ) : (
                <Gamepad2 className="w-5 h-5 text-muted-foreground/50" />
              )}
            </div>
            <div>
              <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground">{t('psn.last_platinum')}</p>
              <p className="text-[11px] font-semibold text-foreground">{LAST_PLATINUM.name}</p>
              <p className="text-[9px] text-muted-foreground">{LAST_PLATINUM.date}</p>
            </div>
          </div>

          <div className="border border-border rounded-sm p-3 bg-card text-center flex-1 w-full">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Percent className="w-3 h-3 text-muted-foreground" />
              <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground">{t('psn.completion')}</p>
            </div>
            <p className="text-xl font-bold text-foreground">{completionRate}%</p>
            <p className="text-[9px] text-muted-foreground">
              {t('psn.games_count').replace('{completed}', String(gamesStats.platinumGames)).replace('{total}', String(gamesStats.totalGames))}
            </p>
          </div>
        </div>

        {/* Games Library Grid */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gamepad2 className="w-4 h-4 text-muted-foreground" />
            <p className="text-[9px] tracking-[0.4em] uppercase font-semibold text-muted-foreground">{t('psn.game_library')}</p>
          </div>

          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-5">
            {(['all', 'platinum', 'progress'] as GamesFilter[]).map(filter => (
              <button
                key={filter}
                onClick={() => setGamesFilter(filter)}
                className={`text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm border transition-all duration-300 ${
                  gamesFilter === filter
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-border text-muted-foreground hover:border-foreground/30'
                }`}
              >
                {filter === 'all' ? t('psn.all') : filter === 'platinum' ? t('psn.platinated') : t('psn.in_progress')}
                <span className="ml-1.5 opacity-60">
                  {filter === 'all' ? gamesStats.totalGames : filter === 'platinum' ? gamesStats.platinumGames : gamesStats.totalGames - gamesStats.platinumGames}
                </span>
              </button>
            ))}
          </div>

          {/* Games grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {filteredGames.map((game) => (
              <div key={game.name} className="group relative border border-border rounded-sm overflow-hidden bg-card hover:border-foreground/20 transition-all duration-300">
                {/* Platform tag */}
                <div className="absolute top-1 left-1 z-10">
                  <span className={`text-[6px] font-bold tracking-wider px-1.5 py-0.5 rounded-sm ${
                    game.platform === 'PS5' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-indigo-800 text-white'
                  }`}>
                    {game.platform}
                  </span>
                </div>

                {/* Platinum badge */}
                {game.hasPlatinum && (
                  <div className="absolute top-1 right-1 z-10">
                    <img src={platinumTrophy} alt="Platinum" className="w-4 h-4 object-contain" />
                  </div>
                )}

                {/* Cover placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-b from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <Gamepad2 className="w-6 h-6 text-muted-foreground/20" />
                  {/* Overlay on hover with game name */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center p-2">
                    <span className="text-white text-[8px] tracking-wider text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                      {game.name}
                    </span>
                  </div>
                </div>

                {/* Info bar */}
                <div className="p-1.5">
                  <p className="text-[7px] font-semibold text-foreground truncate leading-tight" title={game.name}>
                    {game.name}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-0.5">
                      {game.hasPlatinum && <CheckCircle className="w-2.5 h-2.5 text-emerald-500" />}
                      <span className={`text-[7px] font-bold ${game.completion === 100 ? 'text-emerald-500' : 'text-muted-foreground'}`}>
                        {game.completion}%
                      </span>
                    </div>
                  </div>
                  {/* Mini progress bar */}
                  <div className="w-full h-[2px] bg-muted rounded-full mt-1 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        game.completion === 100 ? 'bg-emerald-500' : game.hasPlatinum ? 'bg-yellow-500' : 'bg-muted-foreground/40'
                      }`}
                      style={{ width: `${game.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
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
