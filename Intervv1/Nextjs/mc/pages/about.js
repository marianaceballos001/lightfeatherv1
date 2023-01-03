import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import SiteCarousel from "./additional_components/SiteCarousel";
import TabContents from "./additional_components/TableContents";

const titles = ["Front-end", "React", "Visualization"];

const About = () => {
  return (
    <>
      <BaseLayout className="cover">
        <BasePage>
          <div className="d-flex justify-content-center text-center pt-5">
            <Row className="row">
              <Col className="col-md-12">
                <div className="jumbotron pt-5">
                  <h1>
                    Web-dev projects: &nbsp;
                    <span>
                      <Typed
                        loop
                        typeSpeed={70}
                        backSpeed={70}
                        strings={titles}
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        className="self-typed"
                        cursorChar="|"
                      />
                    </span>
                  </h1>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="justify-content-center text-center pb-2">
              <Col md="12 pt-5 pb-2">
                <TabContents />
              </Col>
            

            <p>
              <a className="button1" href="#">
                Learn more
              </a>
            </p>
            </Row>
          </div>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default About;
