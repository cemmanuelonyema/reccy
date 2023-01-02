//dependency import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
//file import
import { App } from './App';
import '../src/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
            <Router>
                  <App />
            </Router>
      </React.StrictMode>
);
