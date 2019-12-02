import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from "reactstrap";

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Preview of my resume" className="cv-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  download="Koua_Thao_Resume"
                  className="btn btn-success"
                  href="/static/Koua_Thao_Resume.pdf"
                >
                  Download
                </a>
              </div>
              <iframe
                style={{ width: "100%", height: "800px" }}
                src="/static/Koua_Thao_Resume.pdf"
              ></iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
