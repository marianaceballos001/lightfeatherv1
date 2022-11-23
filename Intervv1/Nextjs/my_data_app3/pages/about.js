import Header from "../pages/components/shared/Header";
import Footer from "./components/shared/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
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

                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Pie Graphs</h4>
                    <p>
                      Totals were added and a percentage overall was graphed for
                      Female students. The information was graphed for the 3
                      available years.
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <div className="">
                    <a href="/Graphs1" className="gallery-lightbox">
                      <img
                        src="/ArticulationTablesOverall.png"
                        width="400"
                        className="d-inline-block align-bottom"
                        alt="React Bootstrap logo"
                      />{" "}
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <Container className="container" data-aos="fade-up">
          <div className="section-title" data-aos="fade-up">
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
                        src="/Articulation1.png"
                        width="400"
                        className="d-inline-block align-bottom"
                        alt="React Bootstrap logo"
                      />{" "}
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

                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Pie Graphs</h4>
                    <p>
                      Totals were added and a percentage overall was graphed for
                      Male students. The information was graphed for the 3
                      available years.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <Container className="container" data-aos="fade-up">
          <div className="section-title" data-aos="fade-up">
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
                    <h4>Bubble Charts</h4>
                    <p>
                      The information graphed was obtained from the 2014-2016
                      Articulation Table 3: By Age and University. The
                      information was only graphed for 3 universities. The total
                      number was graphed as the x-axis, the age as the y-axis
                      (below 18 was selected as 17 and above 30 as 31) and
                      finally the r was selected by a percentage of the total
                      year. Three major universities were graphed using this
                      method.
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <div className="">
                    <a href="/Graphs3" className="">
                      <img
                        src="/Articulation2.png"
                        width="400"
                        className="d-inline-block align-bottom"
                        alt="React Bootstrap logo"
                      />{" "}
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <Container className="container" data-aos="fade-up">
          <div className="section-title" data-aos="fade-up">
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
                        src="/Articulation3.png"
                        width="400"
                        className="d-inline-block align-bottom"
                        alt="React Bootstrap logo"
                      />{" "}
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
                      information was only graphed for 3 universities. The race
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
}
