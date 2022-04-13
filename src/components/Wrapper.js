import React, { useContext } from "react";
import Modal from "./Modal";
import { ImagesContext } from "../contexts/ImmaginiContext";

export default function Wrapper() {
  const { modal } = useContext(ImagesContext);

  return (
    <div className={!modal ? "wrapper-modal" : "wrapper"}>
      <Modal />
    </div>
  );
}
