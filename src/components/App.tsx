import * as React from 'react';
import '../styles/App.css';

import GameInfo from './GameInfo';
import HeroOptions from './HeroOptions';
import HeroLockIns from './HeroLockIns';

import { samplePlayers } from '../utils';

interface State {
  players: Player[];
}

export class App extends React.Component<{}, State> {
  state = {
    players: samplePlayers.slice(0, 6)
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
        <HeroLockIns players={this.state.players} />
        <HeroOptions onPick={this.changeHeroPick} />

        <div className="select">
          <button>Select</button>
        </div>
      </div>
    );
  }
}

export default App;
