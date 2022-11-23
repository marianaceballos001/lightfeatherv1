import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Container, Row } from "react-bootstrap";
import G6 from "./Test/G6";
import G7 from "./Test/G7";
import G8 from "./Test/G8";
import G4 from "./Test/G4";
import G9 from "./Test/G9";

const Graphs = () => {
  return (
    <>
      <Header />
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Male Transfer Students by Year</h2>
          </div>
        </div>
      </section>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <div className="container-fluid">
                      <Row className="row">
                        <div className="col-md-12">
                          <p className="text-center">
                            Students Attending Public Universities
                          </p>
                          <G6 />
                        </div>
                        <div className="col-md-12 mt-5">
                          <Row className="row">
                            <div className="col-md-4">
                              <p className="text-center">
                                School Percentage 2014
                              </p>
                              <G7 />
                            </div>
                            <div className="col-md-4">
                              <p className="text-center">
                                School Percentage 2013
                              </p>
                              <G8 />
                            </div>
                            <div className="col-md-4">
                              <p className="text-center">
                                School Percentage 2012
                              </p>
                              <G9 />
                            </div>
                          </Row>
                        </div>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Frameworks Use</strong>: Next.js, Bootstrap
                  </li>
                  <li>
                    <strong>Graphing Library</strong>: React-chartjs-2.js
                  </li>
                  <li>
                    <strong>Data Can be obtained at</strong>:{" "}
                    <a href="#">
                      https://www.fldoe.org/accountability/data-sys/CCTCMIS/reports.stml
                    </a>
                  </li>
                  <li>
                    <strong>Information Graphed</strong>:{" "}
                    <p>
                      Male Transfer Graphs for selected Fall semesters, graphed by year and a percent of the total.
                    </p>
                  </li>
                  <li>
                    <strong>Universities</strong>: <G4 />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Graphs;
