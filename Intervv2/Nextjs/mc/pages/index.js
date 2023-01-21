import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <Container>
            <Row>
              <Col className="image-wrapper col-md-6 col-lg-5">
                <div className="hero-section mt-5">
  
                  <img className="image" src="/images/MCLogoV2.png" layout="responsive" />
                </div>
              </Col>
              <Col className="hero-welcome-wrapper col-md-6 col-lg-7">
                <div className="hero-welcome-main">
                  <h1 className="">
                    Welcome to my portfolio website. <br></br>
                  </h1>
                </div>
                <h1 className="hero-welcome-info pt-5">
                  <span id="a">
                    Please feel free to look around & see how we can
                    collaborate.
                  </span>
                </h1>
              </Col>
            </Row>
          </Container>

          <div className="bottomPortion mt-2 text-light">
            <Container>
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={4}>
                      <h2>Programming</h2>
                      <p>
                      I started getting interested in Big Data Analytics and Programming when I was chosen as a consultant in the field. I have taken formal coursework. I am also close to finishing a Bachelors in CS. I aim to further develop my analysis and programming capabilities.
                      </p>
                      <p>
                        <Button className="button1" href="/about">
                          Web Dev
                        </Button>
                        <Button className="button1" href="/projects/All">
                          OOP
                        </Button>
                      </p>
                    </Col>
                    <Col md={4}>
                      <h2>Data Analysis/Science</h2>
                      <p>
                      My background has been focused on solving analytical problems in academia and consulting. Engineering degrees train you as a critical thinker and problem solver. I am applying those skills in the practical field of Analytics, making use of my CS background.
                      </p>
                      <Button className="button1" href="/data">
                        Data Sc
                      </Button>
                    </Col>
                    <Col md={4}>
                      <h2>Engineering Background</h2>
                      <p>
                        I have come to realize that most technical positions are
                        essentially analytics jobs in different functional
                        areas. I have a BS in Biomedical Engineering and an MS
                        in Mechanical Eng both degrees focused on analyzing
                        complex Biological phenomena using Matlab and Math.
                      </p>
                      <p>
                        <Button className="button1" href="/cv">
                          Resume
                        </Button>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
