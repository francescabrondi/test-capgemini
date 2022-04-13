import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Immagini from "./components/Immagini";
import Cercaimmagini from "./components/CercaImmagini";
import Frase from "./components/Frase";
import Pagina from "./components/Pagina";
import Contatti from "./components/Contatti";
import Wrapper from "./components/Wrapper";
import ImagesContextProvider from "./contexts/ImmaginiContext";
import QuotesContextProvider from "./contexts/FrasiContext";

import "./scss/main.scss";

function App() {
  return (
    <ImagesContextProvider>
      <QuotesContextProvider>
        <div className="App">
          <Wrapper />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="immagini" element={<Immagini />} />
            <Route path="cerca-immagini" element={<Cercaimmagini />} />
            <Route path="frase" element={<Frase />} />
            <Route path="pagina" element={<Pagina />} />
            <Route path="contatti" element={<Contatti />} />
          </Routes>
        </div>
      </QuotesContextProvider>
    </ImagesContextProvider>
  );
}

export default App;
