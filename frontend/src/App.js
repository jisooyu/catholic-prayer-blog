import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Landing from './pages/Landing';
import Fatima from './pages/Fatima'
import Prague from './pages/Prague'
import Faust from './pages/Faust'
import Joyful from './pages/Joyful'
import Luminous from './pages/Luminous'
import Sorrowful from './pages/Sorrowful'
import Glorious from './pages/Glorious'
import {
  joyfulPrayers, joyfulPrePrayer, luminousPrayers, luminousPrePrayer, sorrowfulPrePrayer, sorrowfulPrayers, gloriousPrePrayer, gloriusPrayers
} from './prayers/prayers';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/fatima" element={<Fatima />} />
          <Route path='/prague' element={<Prague />} />
          <Route path='/faust' element={<Faust />} />
          <Route
            path="/joyful"
            element={
              <Joyful prePrayer={joyfulPrePrayer} prayers={joyfulPrayers} />
            }
          />
          <Route
            path="/luminous"
            element={
              <Luminous prePrayer={luminousPrePrayer} prayers={luminousPrayers} />
            }
          />
          <Route
            path="/sorrowful"
            element={
              <Sorrowful prePrayer={sorrowfulPrePrayer} prayers={sorrowfulPrayers} />
            }
          />
          <Route
            path="/glorious"
            element={
              <Glorious prePrayer={gloriousPrePrayer} prayers={gloriusPrayers} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
