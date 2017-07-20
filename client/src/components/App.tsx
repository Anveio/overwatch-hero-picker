import * as React from 'react';
import '../styles/App.css';

import GameInfo from './GameInfo';
import HeroOptions from './HeroOptions';
import HeroPicks from './HeroLockIns';

interface State {
  players: Player[];
}

const initialPlayers: Player[] = [
  { name: 'Me' },
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

  changeHeroPick = (name: string, newPick: Hero) => {
    const index: number = this.state.players
      .map(player => player.name)
      .indexOf(name);

    this.setState((prevState): Partial<State> => {
      // Awkard, but prevState should not be mutated directly.
      const shallowPlayersCopy: Player[] = prevState.players;
      shallowPlayersCopy[index].lockIn = newPick;

      return {
        players: shallowPlayersCopy
      };
    });
  };

  render() {
    return (
      <div className="container">
        <GameInfo />
        <HeroPicks players={this.state.players} />
        <HeroOptions onPick={this.changeHeroPick} />

        <div className="select">
          <button>Select</button>
        </div>
      </div>
    );
  }
}

export default App;
