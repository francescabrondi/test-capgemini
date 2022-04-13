import React, { useContext } from "react";
import { ImagesContext } from "../contexts/ImmaginiContext";

export default function Modal() {
  const { photoId, closeModal, modal, photo } = useContext(ImagesContext);

  return (
    <div className="modal">
      <img
        src="close.png"
        alt=""
        className="close-modal"
        onClick={closeModal}
      />
      <figure>
        <img src={photoId} alt="" className="immagine-modal" />
      </figure>
    </div>
  );
}
