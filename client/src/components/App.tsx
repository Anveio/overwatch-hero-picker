import * as React from 'react';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container">
        <div className="gameinfo">
          <div className="match">
            <div className="gametype">Attack</div>
            <div className="map">King's Row</div>
          </div>

          <div className="character">Bastion</div>
        </div>

        <div className="select">
          <button>Select</button>
        </div>
      </div>
    );
  }
}

export default App;
