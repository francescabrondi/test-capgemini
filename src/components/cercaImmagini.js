import React, { useContext } from "react";
import { ImagesContext } from "../contexts/ImmaginiContext";

function Cercaimmagini() {
  const { images, query, SearchImages } = useContext(ImagesContext);

  return (
    <main className="immagini page">
      <h1>Ricerca immagini</h1>
      <input type="text" value={query} onChange={SearchImages} />
      <ul>
        {images.length > 0 &&
          images.map((photo) => (
            <li key={photo.id}>
              <img src={photo.urls.regular} alt="" />
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Cercaimmagini;
