import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Immagini from './components/Immagini';
import Cercaimmagini from './components/CercaImmagini';
import Frase from './components/Frase';
import Pagina from './components/Pagina';
import Contatti from './components/Contatti';

import './scss/main.scss'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="immagini" element={<Immagini />} />
        <Route path="cerca-immagini" element={<Cercaimmagini />} />
        <Route path="frase" element={<Frase />} />
        <Route path="pagina" element={<Pagina />} />
        <Route path="contatti" element={<Contatti />} />
      </Routes>
    </div>
  );
}

export default App;
