import React, { createContext, useState, useEffect } from "react";

export const QuotesContext = createContext();

const QuotesContextProvider = (props) => {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://api.kanye.rest/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setQuote(result);
      });
  };

  return (
    <QuotesContext.Provider value={{ quote, getQuote }}>
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesContextProvider;
