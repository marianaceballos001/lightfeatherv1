import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import {useState, Component } from "react";

import React from 'react';

import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  List,
} from "reactstrap";
import Carousel from "../pages/additional_components/SiteCarousel";
import Image from "next/image";
import CloudE from "../public/images/CloudEssent.png";
import CloudP from "../public/images/CloudPract.png";
import SolA from "../public/images/SolArch.png";
import SQL1 from "../public/images/MySql1.png";
import VBA1 from "../public/images/VBA1.png";
import Exc1 from "../public/images/Excel1.png";
import Py1 from "../public/images/Python1.png";

const Blogs = () => {
  return (
    <>
      <BaseLayout>
        <BasePage>
          <div className="maincontainer pb-5">
            <div className="left">
              <div className="cards">
                <div className="container-fluid text-center">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="page-header pt-5">
                        <h1>Data Management Summary</h1>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-5">
                          <h3>AWS Certs </h3>
                          <div className="row pt-3">
                            <div className="col-md-4">
                              <Image
                                src={SolA}
                                alt="Picture of the author"
                                width="400x"
                                height="214px"
                              />
                            </div>
                            <div className="col-md-4">
                              <Image
                                src={CloudP}
                                alt="Picture of the author"
                                width="400px"
                                height="215.87px"
                              />
                            </div>
                            <div className="col-md-4">
                              <Image
                                src={CloudE}
                                alt="Picture of the author"
                                width="242px"
                                height="203px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 pt-5">
                          <h3>Functional Areas</h3>
                          <div className="row pt-3">
                            <div className="col-md-4">
                              <Card
                                className="square border border-primary"
                                color="transparent"
                              >
                                {" "}
                                <CardBody color="transparent">
                                  <CardTitle tag="h5">
                                    HRIS Functional Area
                                  </CardTitle>
                                </CardBody>
                                <List>
                                  <li>
                                    In January I will perform ACA analysis for
                                    14K users
                                  </li>
                                  <li>
                                    Basic Knowledge of payroll and other HR
                                    areas
                                  </li>
                                  <li>
                                  Upload, analysis, queries, and reports from PeopleSoft
                                  </li>
                                </List>{" "}
                              </Card>
                            </div>
                            <div className="col-md-4">
                              <Card
                                className="square border border-primary"
                                color="transparent"
                              >
                                <CardBody color="transparent">
                                  <CardTitle tag="h5">
                                    Grant Management
                                  </CardTitle>
                                  <CardText>
                                    Departmental Lead for Data Requests
                                  </CardText>
                                </CardBody>
                                <List>
                                  <li>
                                    5+ APR government report collaborations
                                  </li>
                                  <li>
                                    2 5 million grant writting collaboration
                                  </li>
                                  <li>Department presentations</li>
                                </List>{" "}
                              </Card>
                            </div>
                            <div className="col-md-4">
                              <Card
                                className="square border border-primary"
                                color="transparent"
                              >
                                <CardBody color="transparent">
                                  <CardTitle tag="h5">
                                    Residential Management
                                  </CardTitle>
                                  <CardText>
                                    This is some text within a card body.
                                  </CardText>
                                </CardBody>
                                <List>
                                  <li>Database Development</li>
                                  <li>Web Development</li>
                                  <li>Cam Knowledge</li>
                                </List>{" "}
                              </Card>
                            </div>
                          </div>
                          <div className="col-md-12 pt-5">
                            <h3>Power Bi Dashboard and Analysis</h3>
                            <div className="row pt-3">
                              <Carousel />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 pt-5">
                              <h3>Database Management</h3>
                              <div className="row pt-3">
                                <div className="col-md-3">
                                  <h3>Oracle PeopleSoft</h3>

                                  <Card
                                    className="square border border-primary"
                                    color="transparent"
                                  >
                                    {" "}
                                    <CardBody color="transparent">
                                      <CardTitle tag="h5">
                                        HRIS Functional Area
                                      </CardTitle>
                                    </CardBody>
                                    <List>
                                      <li>
                                        Functional configurations for PeopleSoft
                                      </li>
                                      <li>Query development for HR</li>
                                      <li>Power-bi, Excel, Python Analysis, etc..</li>
                                    </List>{" "}
                                  </Card>
                                </div>
                                <div className="col-md-3">
                                  <h3>VBA DBA Creation</h3>
                                  <Image
                                    src={VBA1}
                                    alt="Picture of the author"
                                    width="400px"
                                    height="167.66px"
                                  />
                                </div>
                                <div className="col-md-3">
                                  <h3>MySQL</h3>

                                  <Image
                                    src={SQL1}
                                    alt="Picture of the author"
                                    width="400px"
                                    height="108.89px"
                                  />
                                </div>

                                <div className="col-md-3">
                                  <h3>NoSQL DBAs</h3>
                                  <Card
                                    className="square border border-primary"
                                    color="transparent"
                                  >
                                    {" "}
                                    <CardBody color="transparent">
                                      <CardTitle tag="h5">
                                        I have experience with the following
                                        Management Systems:
                                      </CardTitle>
                                    </CardBody>
                                    <List>
                                      <li>Hadoop</li>
                                      <li>MongoDB</li>
                                    </List>{" "}
                                  </Card>
                                </div>
                              </div>
                            </div>
                          </div>

                          
                          <div className="row">
                            <div className="col-md-12 pt-5">
                              <h3>Data Analysis </h3>
                              <div className="row pt-3">
                                <div className="col-md-4">
                                  <h4>Python Data Analysis</h4>
                                  <Image
                                    src={Py1}
                                    alt="Picture of the author"
                                    width="400px"
                                    height="231.54px"
                                  />
                                </div>
                                <div className="col-md-4">
                                  <h4>AWS Pipelines</h4>

                                  <Card
                                    className="square border border-primary"
                                    color="transparent"
                                  >
                                    {" "}
                                    <CardBody color="transparent">
                                      <CardTitle tag="h5">
                                        AWS services used for data Pipelines
                                      </CardTitle>
                                      <CardText>
                                        These services have been used for ETL in
                                        aws:{" "}
                                      </CardText>
                                    </CardBody>
                                    <List>
                                      <li>Kinesis</li>
                                      <li>Spark</li>
                                    </List>{" "}
                                  </Card>
                                </div>
                                <div className="col-md-4">
                                  <h4>Excel Data Analysis</h4>
                                  <Image
                                    src={Exc1}
                                    alt="Picture of the author"
                                    width="400px"
                                    height="151.70px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>





                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Blogs;
