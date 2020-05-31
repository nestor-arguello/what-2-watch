import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

import './index.scss';

import App from './App';

const typography = new Typography(lincolnTheme);
typography.injectStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
