import React, { useContext } from "react";
import Modal from "./Modal";
import { ImagesContext } from "../contexts/ImmaginiContext";
import { IWrapper } from "../model/interface";

const Wrapper = (): IWrapper => {
  const { modal } = useContext(ImagesContext);

  if (!modal) {
    return (
      <div className="wrapper">
        <Modal />
      </div>
    );
  }
};

export default Wrapper;
