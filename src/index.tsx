import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import 'normalize.css';

import { styles } from './globalStyles';
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={styles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
