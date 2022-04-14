import React, { useContext } from "react";
import { QuotesContext } from "../contexts/FrasiContext";
import { IFrase } from "../model/interface";

const Frase = ():IFrase => {
 
  const { quote, getQuote } = useContext(QuotesContext);

  return (
    <main className="test page">
      <h1>Citazione</h1>
      <p>
        {quote
          ? quote.quote
          : "Clicca per scoprire una citazione di Kanye West"}
      </p>
      <button onClick={(e) => getQuote(e.target.value)}>Nuova frase</button>
    </main>
  );
}

export default Frase;
