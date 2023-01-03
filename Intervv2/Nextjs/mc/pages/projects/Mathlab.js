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
                        <CardTitle>Thesis Project</CardTitle>
                        <br></br>
                        <CardText>
                          Title: Influence of salinous solutions in the pressure
                          and volume modulations of the intracranial cavity{" "}
                        </CardText>
                        <Button
                          className="button2"
                          href="https://oaktrust.library.tamu.edu/handle/1969.1/ETD-TAMU-2011-08-10192"
                        >
                          Open
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className="bg-transparent border-0">
                      <CardBody className="card_main">
                        <CardTitle>Bioheat Project Sample</CardTitle>
                        <CardSubtitle>
                          Partial Differential Equations
                        </CardSubtitle>
                        <br></br>
                        <CardText>
                          Modeling of published Differential Equations using
                          Matlab.
                        </CardText>
                        <ModalBioheat />
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className="bg-transparent border-0">
                      <CardBody className="card_main">
                        <CardTitle>Finete Element Analysis</CardTitle>
                        <CardSubtitle>
                          Modeling of Finite Element Analysis Element Analysis
                        </CardSubtitle>
                        <br></br>
                        <CardText>
                          Modeling of heat transfer using Matlab.
                        </CardText>
                        <ModalFEA />
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className="bg-transparent border-0">
                      <CardBody className="card_main">
                        <CardTitle>Vascular Fluid Mechanics</CardTitle>
                        <CardSubtitle>Modeling Blood Flow</CardSubtitle>
                        <br></br>
                        <CardText>
                          Modeling of blood flow simulating equations using
                          Matlab.
                        </CardText>
                        <ModalFM />
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className="bg-transparent border-0">
                      <CardBody className="card_main">
                        <CardTitle>Modeling of Pressure</CardTitle>
                        <CardSubtitle>
                          Device Modeling Using Mathlab
                        </CardSubtitle>
                        <CardText>
                          Modeling of blood flow in Specific Instances.
                        </CardText>
                        <ModalCutting />
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
