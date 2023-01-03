import React from "react";
import FM from "../../public/images/FM.png";
import { useState, Component } from "react";
import Image from "next/image";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        className="button2"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Open Modal{" "}
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Sample of Fluid Mechanics Project{" "}
          </h5>

          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          {" "}
          <div>
            <Image src={FM} alt="Picture of the author" width="800x" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
        
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Example;
