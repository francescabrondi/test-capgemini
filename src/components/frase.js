import React, {useState}  from 'react'

function Frase() {
    const [quote, setQuote] = useState("");

    const getQuote = () =>{

        fetch("https://api.kanye.rest/", {
            method: 'GET'
        })
          .then(res => res.json())
          .then(
            (result) => {
              setQuote(result);
            },
          )
      }

    
        return (
            <div className="test page">
<h1>Citazione</h1>
                <p>{quote ? quote.quote : "Clicca per scoprire una citazione di Kanye West"}</p>
                <button onClick={getQuote}>Nuova frase</button>

            </div>
        );
      
}

export default Frase
