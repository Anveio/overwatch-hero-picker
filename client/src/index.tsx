import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import './styles/assets.css';
import './styles/overwatch.css';

ReactDOM.render(<App />, document.querySelector('#root') as HTMLElement);
registerServiceWorker();
