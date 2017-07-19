import * as React from 'react';

const players = [
  'Lukosa',
  'Jerm10297',
  'Manlton',
  'Dann',
  'Madh20rat',
  'Gecko'
];

export default () => {
  const playerPicks = () => {
    return players.map(player => {
      return (
        <div className="selection" key={player}>
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
