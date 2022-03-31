import React, {createContext, useState, useEffect} from 'react'

export const ImagesContext = createContext();

const ImagesContextProvider = (props) => {
    const [photos, setPhotos] = useState([]);
    const client_id = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`, {})
      .then((res) => res.json())
      .then((result) => {
        setPhotos(result);
      });
  }, []); 

  return (
    <ImagesContext.Provider value={{ photos }}>
        {props.children}
    </ImagesContext.Provider>
)
}

export default ImagesContextProvider
