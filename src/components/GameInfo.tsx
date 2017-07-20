import * as React from 'react';
import '../styles/GameInfo.css';

export default () => {
  return (
    <div className="gameinfo">
      <div className="match">
        <div className="gametype">Attack</div>
        <div className="map">King's Row</div>
      </div>

      <div className="character">Bastion</div>
    </div>
  );
};
