const roster = {
  offense: [
    'genji',
    'mccree',
    'pharah',
    'reaper',
    'soldier-76',
    'sombra',
    'tracer'
  ],
  defense: ['bastion', 'hanzo', 'junkrat', 'mei', 'torbjorn', 'widowmaker'],
  tank: ['dva', 'orisa', 'reinhardt', 'roadhog', 'winston', 'zarya'],
  support: ['ana', 'lucio', 'mercy', 'symmetra', 'zenyatta']
};

const samplePlayers: Player[] = [
  { name: 'Me', lockIn: 'dva' },
  { name: 'Jerm10297', lockIn: 'mercy' },
  { name: 'Manlton', lockIn: 'hanzo' },
  { name: 'Dann', lockIn: 'widowmaker' },
  { name: 'Madh20rat', lockIn: 'soldier-76' },
  { name: 'Gecko', lockIn: 'tracer' },
  { name: 'Jerm10297', lockIn: 'junkrat' },
  { name: 'Manlton', lockIn: 'mei' },
  { name: 'Dann', lockIn: 'torbjorn' },
  { name: 'Madh20rat', lockIn: 'dva' },
  { name: 'Gecko', lockIn: 'orisa' },
  { name: 'Jerm10297', lockIn: 'reinhardt' },
  { name: 'Manlton', lockIn: 'roadhog' },
  { name: 'Dann', lockIn: 'winston' },
  { name: 'Madh20rat', lockIn: 'zarya' },
  { name: 'Gecko', lockIn: 'ana' },
  { name: 'Jerm10297', lockIn: 'lucio' },
  { name: 'Manlton', lockIn: 'symmetra' },
  { name: 'Dann', lockIn: 'zenyatta' }
];

export { roster, samplePlayers };
