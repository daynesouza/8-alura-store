import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <Router/>
    </React.StrictMode>,
  </RecoilRoot>
)
