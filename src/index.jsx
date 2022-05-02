import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './components/Friends/index.css';
import './components/Profile/index.css';
import './components/Statistics/index.css';
import './components/Transactions/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
