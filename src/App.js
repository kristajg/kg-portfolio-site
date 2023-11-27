import './assets/styles/index.scss';

import React from 'react';

import Header from './components/Header';
import { Footer } from './components/Footer';
import Content from './containers/Content';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
