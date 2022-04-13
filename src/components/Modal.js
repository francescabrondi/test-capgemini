import React, { useContext } from "react";
import { ImagesContext } from "../contexts/ImmaginiContext";

export default function Modal() {
  const { photoId, closeModal, modal, photos } = useContext(ImagesContext);

  console.log(photos);
  console.log(photoId);
  return (
    <div className="modal">
      <img
        src="close.png"
        alt=""
        className="close-modal"
        onClick={closeModal}
      />
      <figure>
        <img
          src={photos.find((photo) => photo.id === photoId).urls.regular}
          alt=""
          className="immagine-modal"
        />
      </figure>
    </div>
  );
}
