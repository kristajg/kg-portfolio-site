import './assets/styles/index.scss';
import { Analytics } from "@vercel/analytics/react";

import React from 'react';

import Header from './components/Header';
import { Footer } from './components/Footer';
import Content from './containers/Content';

function App() {
  return (
    <div className='App'>
      <Analytics />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
