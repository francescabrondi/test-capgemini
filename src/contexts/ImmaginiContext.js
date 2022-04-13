import React, { createContext, useState, useEffect } from "react";

export const ImagesContext = createContext();

const ImagesContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const client_id = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`, {})
      .then((res) => res.json())
      .then((result) => {
        setPhotos(result);
      });
    setLoading(false);
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
    setLoading(false);
  }, [query]);

  const reset = () => {
    setQuery("");
    setImages([]);
  };

  const SearchImages = (e) => {
    setQuery(e.target.value);
  };

  const openModal = (a) => {
    setModal(!modal);
    setPhotoId(a);
  };

  const closeModal = () => {
    setModal(!modal);
    setPhotoId("");
  };

  return (
    <ImagesContext.Provider
      value={{
        photos,
        images,
        query,
        SearchImages,
        isLoading,
        reset,
        openModal,
        photoId,
        modal,
        closeModal,
      }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};

export default ImagesContextProvider;
