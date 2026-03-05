export interface GameEntry {
  name: string;
  platform: 'PS5' | 'PS4';
  hasPlatinum: boolean;
  completion: number;
}

export const GAMES_LIBRARY: GameEntry[] = [
  { name: 'Alan Wake 2', platform: 'PS5', hasPlatinum: true, completion: 89 },
  { name: 'Alan Wake 1', platform: 'PS5', hasPlatinum: false, completion: 47 },
  { name: 'Astro Bot', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: "Astro's Playroom", platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Demon Slayer: The Hinokami Chronicles', platform: 'PS5', hasPlatinum: true, completion: 10 },
  { name: 'Dragon Ball Gekishin Squadra', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Dragon Ball Sparking Zero', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Dragon Ball Z Kakarot', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'EA Sports FC 26', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Expedition 33', platform: 'PS5', hasPlatinum: false, completion: 54 },
  { name: 'Ghost of Tsushima', platform: 'PS5', hasPlatinum: false, completion: 42 },
  { name: 'God of War (2018)', platform: 'PS4', hasPlatinum: true, completion: 100 },
  { name: 'God of War Ragnarök', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Gran Turismo 7', platform: 'PS5', hasPlatinum: false, completion: 28 },
  { name: 'GTA 3 Definitive Edition', platform: 'PS5', hasPlatinum: false, completion: 17 },
  { name: 'GTA 5', platform: 'PS5', hasPlatinum: false, completion: 25 },
  { name: 'GTA San Andreas Definitive Edition', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'GTA Vice City Definitive Edition', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Hogwarts Legacy', platform: 'PS5', hasPlatinum: false, completion: 77 },
  { name: 'Horizon Zero Dawn', platform: 'PS5', hasPlatinum: false, completion: 27 },
  { name: 'Indika', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Kena: Bridge of Spirits', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: "Marvel's Spider-Man", platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: "Marvel's Spider-Man 2", platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: "Marvel's Spider-Man: Miles Morales", platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Naruto X Boruto Ultimate Ninja Storm Collection', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Police Simulator: Patrol Officers', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Ratchet & Clank: Rift Apart', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Rematch', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'RoboCop: Rogue City', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Sackboy: A Big Adventure', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Silent Hill 2', platform: 'PS5', hasPlatinum: false, completion: 42 },
  { name: 'Silent Hill f', platform: 'PS5', hasPlatinum: false, completion: 67 },
  { name: 'Sly Raccoon', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Stray', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'The Last of Us Part I', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'The Last of Us Part II', platform: 'PS5', hasPlatinum: true, completion: 88 },
  { name: 'UFL', platform: 'PS5', hasPlatinum: true, completion: 100 },
  { name: 'Until Dawn', platform: 'PS5', hasPlatinum: true, completion: 100 },
];

export const getGamesStats = () => {
  const totalGames = GAMES_LIBRARY.length;
  const platinumGames = GAMES_LIBRARY.filter(g => g.hasPlatinum).length;
  return { totalGames, platinumGames };
};
