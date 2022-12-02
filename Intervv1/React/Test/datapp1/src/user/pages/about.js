import React from 'react';
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Graphs1 from "../pages/logos/ArticulationTablesOverall.png";
import Graphs2 from "../pages/logos/Articulation1.png";
import Graphs3 from "../pages/logos/Articulation2.png";
import Graphs4 from "../pages/logos/Articulation3.png";
import Header from "../../user/components/header";
import Footer from "../../user/components/footer";

const About = () => {
  return (
    <div>
    <Header />

      <section id="about" className="about">
        <Container className="container" data-aos="fade-up">
          <div className="section-title" data-aos="fade-up">
            <h2>Part 1 &nbsp;</h2>
            <p>Female Transfer Students</p>
          </div>

          <Row className="row">
            <div className="container-fluid">
              <Row className="row">
                <Col className="col-md-8">
                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Stacked Graph</h4>
                    <p>
                      The information graphed was obtained from the 2014-2016
                      Articulation Table 1: By Gender and University. Only the
                      information for Female students was graphed.
                    </p>
                  </div>

                </Col>
                <Col className="col-md-4">
                  <div className="">
                    <a href="/Graphs1" className="gallery-lightbox">
                      <img
                        src={Graphs1}
                        className="d-inline-block align-bottom"
                        alt="Graphs"
                        style={{ width: 400 }}                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <Container className="container" >
          <div className="section-title" >
            <h2>Part 2 &nbsp;</h2>
            <p>Male Transfer Students</p>
          </div>

          <Row className="row">
            <div className="container-fluid">
              <Row className="row">
                <Col className="col-md-4">
                  <div className="">
                    <a href="/Graphs2" className="">
                      <img
                        src={Graphs2}
                        className="d-inline-block align-bottom"
                        alt="React Bootstrap logo"
                        style={{ width: 400 }}                      />
                    </a>
                  </div>
                </Col>
                <Col className="col-md-8">
                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Stacked Graph</h4>
                    <p>
                      The information graphed was obtained from the 2014-2016
                      Articulation Table 1: By Gender and University. Only the
                      information for Male students was graphed.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <Container className="container" >
          <div className="section-title">
            <h2>Part 3 &nbsp;</h2>
            <p>Transfer by Age</p>
          </div>

          <Row className="row">
            <div className="container-fluid">
              <Row className="row">
                <Col className="col-md-8">
                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Scatter Charts</h4>
                    <p>
                      The information graphed was obtained from the 2014-2016
                      Articulation Table 3: By Age and University. The
                      information was only graphed for 3 universities. The total
                      number was graphed as the x-axis, the age as the y-axis
                      (below 18 was selected as 17 and above 30 as 31).
                       Three major universities were graphed using this
                      method.
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <div className="">
                    <a href="/Graphs3" className="">
                      <img
                        src={Graphs3}
                        className="d-inline-block align-bottom"
                        alt="React Bootstrap logo"
                        style={{ width: 400 }}                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <Container className="container">
          <div className="section-title">
            <h2>Part 4 &nbsp;</h2>
            <p>Race and Universities</p>
          </div>

          <Row className="row">
            <div className="container-fluid">
              <Row className="row">
                <Col className="col-md-4">
                  <div className="">
                    <a href="/Graphs4" className="">
                      <img
                        src={Graphs4}
                        className="d-inline-block align-bottom"
                        alt="React Bootstrap logo"
                        style={{ width: 400 }}                      />
                    </a>
                  </div>
                </Col>
                <Col className="col-md-8">
                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Horizontal Bar Chart</h4>
                    <p>
                      The information graphed was obtained from the 2014-2016
                      Articulation Table 2: By Race and University. The
                      information was only graphed for 3 universities. Race
                      was graphed in the y-axis and the number of students was
                      in the x-axis.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};


export default About;