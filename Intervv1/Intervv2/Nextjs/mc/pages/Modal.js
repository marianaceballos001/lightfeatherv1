import React from "react";
import Bioheat from "../public/images/Bioheat.png";
import { useState, Component } from "react";
import Image from "next/image";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>



      <Button
className="button2"        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
Open Modal      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
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
            <Image src={Bioheat} alt="Picture of the author" width="400x" />
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
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Example;