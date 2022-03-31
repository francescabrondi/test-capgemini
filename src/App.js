import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Immagini from './components/Immagini';
import Cercaimmagini from './components/CercaImmagini';
import Frase from './components/Frase';
import Pagina from './components/Pagina';
import Contatti from './components/Contatti';
import ImagesContextProvider from './contexts/ImmaginiContext'


import './scss/main.scss'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="immagini" element={<Immagini />} />
        <Route path="cerca-immagini" element={
<ImagesContextProvider>
        <Cercaimmagini />
      </ImagesContextProvider>
        } />
        <Route path="frase" element={<Frase />} />
        <Route path="pagina" element={<Pagina />} />
        <Route path="contatti" element={<Contatti />} />
      </Routes>
    </div>
  );
}

export default App;
