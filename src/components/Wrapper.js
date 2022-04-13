import React, { useContext } from "react";
import Modal from "./Modal";
import { ImagesContext } from "../contexts/ImmaginiContext";

export default function Wrapper() {
  const { modal } = useContext(ImagesContext);

  return modal ? (
    <div className="wrapper">
      <Modal />
    </div>
  ) : (
    <></>
  );
}
