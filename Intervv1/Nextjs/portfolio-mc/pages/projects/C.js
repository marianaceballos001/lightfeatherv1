import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import { React, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import Link from "next/link";
import ModalBioheat from "../ModalProejcts/Bioheat";
import ModalFEA from "../ModalProejcts/FEA";
import ModalFM from "../ModalProejcts/FM";
import ModalCutting from "../ModalProejcts/Cutting";
import OS1 from "../ModalProejcts/OS1";
import OS2 from "../ModalProejcts/OS2";
import Car from "../ModalProejcts/Car";
import Algo from "../ModalProejcts/Algo";

const Blogs = () => {
  return (
    <>
      <BaseLayout>
        <BasePage>
          <div className="maincontainer">
            <div className="left">
              <div className="cards">
                <div className="">
                  <h3 className="pr-5 pt-3">
                    Hi, more projects will be uploaded in the next weeks.{" "}
                    <br></br>
                  </h3>
                </div>

                <div className="filter_buttons">
                  <Button href="/projects/All" className="button1">
                    All
                  </Button>
                  <div className="divider" />
                  <Button
                    href="/projects/Pyth"
                    className="button1"
                    variant="contained"
                  >
                    Python
                  </Button>
                  <div className="divider" />
                  <Button
                    href="/projects/Jav"
                    className="button1"
                    variant="contained"
                  >
                    Java
                  </Button>
                  <div className="divider" />
                  <Button
                    href="/projects/Mathlab"
                    className="button1"
                    variant="contained"
                  >
                    Mathlab
                  </Button>
                  <div className="divider" />
                  <Button
                    href="/projects/C"
                    className="button1"
                    variant="contained"
                  >
                    C++
                  </Button>
                  <div className="divider" />
                </div>

                <main>
                 
               
              
                  <div>
                    <Card className="bg-transparent border-0">
                      <CardBody className="card_main">
                        <CardTitle>Hardware Programming</CardTitle>
                        <CardSubtitle>C++</CardSubtitle>
                        <br></br>

                        <CardText>
                          Simulate the lights of a car using C++
                        </CardText>
                        <Car />
                      </CardBody>
                    </Card>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Blogs;
