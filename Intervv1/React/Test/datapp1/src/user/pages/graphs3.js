import React from 'react';
import { Row } from "react-bootstrap";
import G10 from "../graphs/G10";
import G11 from "../graphs/G11";
import G12 from "../graphs/G12";
import Header from "../../user/components/header";
import Footer from "../../user/components/footer";

const Graphs = () => {
  return (
    <>
    <Header />
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
          <h2>2014 Fall Transfer Students Classified By Age And University </h2>
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
                        <p className="text-center">FAU 2014</p>
                          <G10/>
                        </div>
                        <div className="col-md-12 mt-5">
                          <Row className="row">
                          <p className="text-center">FIU 2014</p>
                          <G11/>
                          </Row>
                        </div>
                        <div className="col-md-12 mt-5">
                          <Row className="row">
                          <p className="text-center">FSU 2014</p>
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
                    <strong>Frameworks Use</strong>: React, Bootstrap
                  </li>
                  <li>
                    <strong>Graphing Library</strong>: Recharts
                  </li>
                  <li>
                    <strong>Data Can be obtained at</strong>:{" "}
                    <p  className="text-decoration-none">
                      https://www.fldoe.org/accountability/data-sys/CCTCMIS/reports.stml
                    </p>
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
    </>  );
};

export default Graphs;
