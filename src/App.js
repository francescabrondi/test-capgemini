import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Immagini from './components/immagini';
import Cercaimmagini from './components/cercaImmagini';
import Frase from './components/frase';
import Pagina from './components/pagina';
import Contatti from './components/contatti';

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
