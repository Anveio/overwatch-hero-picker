import * as React from 'react';
import '../styles/HeroPicks.css';

const players: Player[] = [
  { name: 'Lukosa' },
  { name: 'Jerm10297' },
  { name: 'Manlton' },
  { name: 'Dann' },
  { name: 'Madh20rat' },
  { name: 'Gecko' }
];

export default () => {
  const playerPicks = () => {
    return players.map((player: Player) => {
      return (
        <div className="selection" key={player.name}>
          <div className="hero" />
          <div className="info">
            <div className="name">Dann</div>
            <div className="hero-dropdown" />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="selections">
      {playerPicks()}
    </div>
  );
};
