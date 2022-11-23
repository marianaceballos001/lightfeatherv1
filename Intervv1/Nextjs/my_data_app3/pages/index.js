import Header from "../pages/components/shared/Header";
import Footer from "./components/shared/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Header />
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <Container className="container" data-aos="fade-up">
          <Row
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8 text-dark">
              <h1>
                Hi, these are graphing examples of Data for Transfer Students in
                Public Universities.
              </h1>
              <h2>The information was graphed with React-Chartjs-2</h2>
            </div>
          </Row>

          <Row
            className="row gy-4 mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line"></i>
                <h3>
                  <a href="/about">Methodology</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line"></i>
                <h3>
                  <a href="/Graphs1">Graphs</a>
                </h3>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <Container className="container" data-aos="fade-up">
          <div className="section-title" data-aos="fade-up">
            <h2>About &nbsp;</h2>
            <p>In a nutshell</p>
          </div>

          <Row className="row">
            <div className="container-fluid">
              <Row className="row">
                <Col className="col-md-7">
                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Data</h4>
                    <p>
                      The information graphed was obtained from the Department
                      of Education 2014-2016 Articulation Tables, which are
                      available to the public. I am not affiliated with the
                      Department of Education. The information intends to create
                      a front-end example of Transfer Student Data to better
                      educate the public.
                    </p>
                  </div>

                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Frameworks/Libraries</h4>
                    <p>
                      The graphing library used for this project was
                      react-charts.js-2. Which is an easy-to-use library in
                      react, the only variations to Doughnut, Horizontal,
                      Vertical, Bubble, Stack, and Multiaxis charts were done to
                      the axis, title, and data present corresponding to the
                      examples provided on the website
                      https://react-chartjs-2.js.org/examples/vertical-bar-chart.
                    </p>
                  </div>
                  <div
                    className="icon-box mt-5 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Graphing</h4>
                    <p>
                      Each example provided on the website has an App.tsx file
                      that can be copied on React or Next.js on the corresponding
                      sections of the file. In this case, the information was
                      pasted onto a .js file in Next.js which is accessed by the
                      user through re-routing.
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <img
                    src="/MCLogoV1.png"
                    width="400"
                    className="d-inline-block align-bottom"
                    alt="React Bootstrap logo"
                  />{" "}
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-title">
            <h2>Gallery &nbsp;</h2>
            <p>Graphs</p>
          </div>

          <div className="row g-0 text-center" data-aos="fade-left">
            <div className="col-lg-3 col-md-4">
              <a href="/Graphs1">
                <Card className="card1 pt-5">
                  <Card.Body>
                    <Card.Title className="pb-5">
                      <h3>Female Transfer Students</h3>
                    </Card.Title>
                    <Card.Text className="text1">
                      Transfer Students Attending Public Universities
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <a href="/Graphs2">
                <Card className="card2 pt-5">
                  <Card.Body>
                    <Card.Title className="pb-5">
                      <h3>Male Transfer Students</h3>
                    </Card.Title>
                    <Card.Text className="text1">
                      Transfer Students Attending Public Universities
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <a href="/Graphs3">
                <Card className="card3 pt-5">
                  <Card.Body>
                    <Card.Title className="pb-5">
                      <h3>Transfer Students by Age</h3>
                    </Card.Title>
                    <Card.Text className="text1">
                      Transfer Students Attending Public Universities
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <a href="/Graphs4">
                <Card className="card4 pt-5">
                  <Card.Body>
                    <Card.Title className="pb-5">
                      <h3>Transfer Students by Race</h3>
                    </Card.Title>
                    <Card.Text className="text1">
                      Transfer Students Attending Public Universities
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
