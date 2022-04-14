import React, { useContext } from "react";
import { ImagesContext } from "../contexts/ImmaginiContext";
import { IModal } from "../model/interface";

export default function Modal(): IModal {
  const { photoId, closeModal, modal } = useContext(ImagesContext);

  return (
    <div className={modal ? "modal" : "no-modal"}>
      <figure>
        <img
          src="close.png"
          alt=""
          className="close-modal"
          onClick={closeModal}
        />
        <img src={photoId} alt="" className="immagine-modal" />
      </figure>
    </div>
  );
}
