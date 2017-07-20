import * as React from 'react';
import '../styles/App.css';

import GameInfo from './GameInfo';
import HeroOptions from './HeroOptions';
import HeroPicks from './HeroPicks';

interface State {
  players: Player[];
}

const initialPlayers: Player[] = [
  { name: 'You' },
  { name: 'Jerm10297', lockIn: 'mercy' },
  { name: 'Manlton', lockIn: 'hanzo' },
  { name: 'Dann', lockIn: 'widowmaker' },
  { name: 'Madh20rat', lockIn: 'soldier' },
  { name: 'Gecko', lockIn: 'tracer' }
];

export class App extends React.Component<{}, State> {
  state = {
    players: initialPlayers
  };

  render() {
    return (
      <div className="container">
        <GameInfo />
        <HeroPicks players={this.state.players} />
        <HeroOptions />

        <div className="select">
          <button>Select</button>
        </div>
      </div>
    );
  }
}

export default App;
