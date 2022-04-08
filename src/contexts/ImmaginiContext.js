import React, { createContext, useState, useEffect } from "react";

export const ImagesContext = createContext();

const ImagesContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);
  const client_id = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`, {})
      .then((res) => res.json())
      .then((result) => {
        setPhotos(result);
      });
    //setLoading(false);
  }, []);

  useEffect(() => {
    query &&
      fetch(
        `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${query}`,
        {}
      )
        .then((res) => res.json())
        .then((result) => {
          setImages(result.results);
        });
  }, [query]);

  const SearchImages = (e) => {
    setQuery(e.target.value);
  };

  return (
    <ImagesContext.Provider
      value={{ photos, images, query, SearchImages, isLoading }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};

export default ImagesContextProvider;
