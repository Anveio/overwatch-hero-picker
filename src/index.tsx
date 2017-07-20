import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import './styles/index.css';

ReactDOM.render(<App />, document.querySelector('#root') as HTMLElement);
registerServiceWorker();