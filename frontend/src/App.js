import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Landing from './components/Landing';
import Fatima from './pages/Fatima'
import Prague from './pages/Prague'
import Faust from './pages/Faust'
import Joyful from './pages/Joyful'
import Luminous from './pages/Luminous'
import Sorrowful from './pages/Sorrowful'
import { joyfulPrayers, joyfulPrePrayer, sorrowfulPrayers, luminousPrayers } from './prayers/prayers';

function App() {
  // push
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/fatima' element={<Fatima />} />
          <Route path='/prague' element={<Prague />} />
          <Route path='/faust' element={<Faust />} />
          <Route path='/joyful' element={<Joyful prayers={joyfulPrayers} prePrayer={joyfulPrePrayer} />} />
          <Route path='/luminous' element={<Luminous prayers={luminousPrayers} />} />
          <Route path='/sorrowful' element={<Sorrowful prayers={sorrowfulPrayers} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
