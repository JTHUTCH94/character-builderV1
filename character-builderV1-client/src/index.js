import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Builder from './Builder';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
<Provider store={store}>
<Builder />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
