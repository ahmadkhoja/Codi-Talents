import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StudentTalent from './StudentTalent';

ReactDOM.render(<StudentTalent />, document.getElementById('root'));
registerServiceWorker();
