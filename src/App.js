import React from 'react';
import { CollectionWords } from './context/CollectionWordsContext';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardLearn from './components/CardLearn/CardLearn';
import Main from './components/Main/Main';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';


import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <CollectionWords>
      <div className='App'>
        <Header />

        <Routes>
          <Route exact path='/words' element={<Main />} />
          <Route exact path='/game' element={<CardLearn />} />
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        
        <Footer />
      </div>
    </CollectionWords>
  );
}

export default App;
