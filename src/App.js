import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TunesProvider from './provider/TunesProvider';
import Routes from './routes/Routes';

export default function App() {
  return (
    <BrowserRouter>
      <TunesProvider>
        <Routes />
      </TunesProvider>
    </BrowserRouter>
  );
}
