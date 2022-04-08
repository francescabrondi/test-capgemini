import React, { useContext, useState } from "react";
import { QuotesContext } from "../contexts/FrasiContext";

function Frase() {
  // const [quote, setQuote] = useState("");

  /*  const getQuote = () => {
    fetch("https://api.kanye.rest/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setQuote(result);
      });
  }; */
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
