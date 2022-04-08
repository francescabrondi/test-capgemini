import React, { useContext } from "react";
import { ImagesContext } from "../contexts/ImmaginiContext";
import LoadingSpinner from "./LoadingSpinner";

function Immagini() {
  const { photos, isLoading } = useContext(ImagesContext);
  console.log(isLoading);
  return (
    <main className="immagini page">
      <h1>Galleria immagini</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.urls.regular} alt="" />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Immagini;
