import React from 'react';
import {Row } from "react-bootstrap";
import G6 from "../graphs/G6";
import G4 from "../graphs/G4";
import Header from "../../user/components/header";
import Footer from "../../user/components/footer";

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
    </>  );
};

export default Graphs;
