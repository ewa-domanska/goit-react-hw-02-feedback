import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/App';
import './index.css';
import {Feedback} from "./components/Feedback/Feedback";
import {Statistics} from "./components/Statistics/Statistics";
import {Section} from "./components/Section/Section";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
