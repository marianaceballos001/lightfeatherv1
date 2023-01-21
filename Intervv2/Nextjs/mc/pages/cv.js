import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from "reactstrap";

const CV = () => {
  return (
    <>
      <BaseLayout>
        <BasePage title="Preview of my CV" className="cv-page">
          <Row className="pt-5">
            <Col md={{ size: 8, offset: 2 }}>
            <div className="cv-title">

              <iframe
                style={{ width: "100%", height: "800px" }}
                src="/images/MCDataEV4.pdf"
              ></iframe>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default CV;
