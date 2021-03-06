interface Player {
  name: string;
  lockIn?: Hero;
}

interface HeroRoster {
  offense: OffenseHero[];
  defense: DefenseHero[];
  tank: TankHero[];
  support: SupportHero[];
}

declare type Hero = OffenseHero | DefenseHero | TankHero | SupportHero;

declare type OffenseHero =
  | 'genji'
  | 'mccree'
  | 'pharah'
  | 'reaper'
  | 'soldier-76'
  | 'sombra'
  | 'tracer';

declare type DefenseHero =
  | 'bastion'
  | 'hanzo'
  | 'junkrat'
  | 'mei'
  | 'torbjorn'
  | 'widowmaker';

declare type TankHero =
  | 'dva'
  | 'orisa'
  | 'reinhardt'
  | 'roadhog'
  | 'winston'
  | 'zarya';

declare type SupportHero = 'ana' | 'lucio' | 'mercy' | 'symmetra' | 'zenyatta';
