import React, { useContext } from "react";
import { ImagesContext } from "../contexts/ImmaginiContext";
import LoadingSpinner from "./LoadingSpinner";
import { IImmagini } from "../model/interface";

const Immagini = ():IImmagini => {
  const { photos, isLoading, openModal, modal } = useContext(ImagesContext);
  console.log(modal);
  return (
    <main className="immagini page">
      <h1>Galleria immagini</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {photos.length > 0 &&
            photos.map((photo) => (
              <li key={photo.id}>
                <img
                  src={photo.urls.regular}
                  alt=""
                  className="immagine-galleria"
                  onClick={() => openModal(photo.id)}
                />
              </li>
            ))}
        </ul>
      )}
    </main>
  );
}

export default Immagini;
