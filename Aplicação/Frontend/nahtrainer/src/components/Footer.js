import React from "react";
import moment from "moment-timezone";
import { Row, Col } from '@themesberg/react-bootstrap';

export default (props) => {
  const currentYear = moment().get("year");

  return (
    <footer className="footer section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <p className="mb-0">
            Copyright © 2024-{`${currentYear} `}
          </p>
        </Col>
      </Row>
    </footer>
  );
};
