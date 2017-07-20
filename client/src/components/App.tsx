import * as React from 'react';
import '../styles/App.css';

import GameInfo from './GameInfo';
import HeroOptions from './HeroOptions';
import HeroPicks from './HeroPicks';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container">
        <GameInfo />
        <HeroPicks />
        <HeroOptions />

        <div className="select">
          <button>Select</button>
        </div>
      </div>
    );
  }
}

export default App;
