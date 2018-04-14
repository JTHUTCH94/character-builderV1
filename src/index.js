import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CharacterForm from './CharacterForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CharacterForm />, document.getElementById('root'));
registerServiceWorker();
