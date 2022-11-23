import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Container, Row } from "react-bootstrap";
import G10 from "./Test/G10";
import G11 from "./Test/G11";
import G12 from "./Test/G12";

const Graphs = () => {
  return (
    <>
      <Header />
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
          <h2>Fall Transfer Students Classified By Age And University </h2>
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
                      <Row className="text-center">
                        <div className="col-md-12 mt-5">
                        <p className="text-center">FAU</p>
                          <G10/>
                        </div>
                        <div className="col-md-12 mt-5">
                          <Row className="row">
                          <p className="text-center">FIU</p>
                          <G11/>
                          </Row>
                        </div>
                        <div className="col-md-12 mt-5">
                          <Row className="row">
                          <p className="text-center">FSU</p>
                          <G12/>
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
                    <strong>Information Graphed</strong>: <p>
                  Transfer Articulation by Age. 
                </p>
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
