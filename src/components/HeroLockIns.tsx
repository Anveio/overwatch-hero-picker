import * as React from 'react';
import '../styles/HeroPicks.css';

interface Props {
  players: Player[];
}

export default ({ players }: Props) => {
  const playerPicks = () => {
    return players.map((player: Player, i) => {
      return (
        <div className={`selection `} key={i}>
          <div className={`hero ${player.lockIn}`} />
          <div className="info">
            <div className="name">
              {player.name}
            </div>
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
