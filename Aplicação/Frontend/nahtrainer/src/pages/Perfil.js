import React from "react";
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Forms";

import ProfilePicture from "../assets/img/team/profile-picture.png";


export default () => {
  return (
    <Container className="my-3">
      <h2>Perfil</h2>
      <Row>
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
              <ChoosePhotoWidget
                title="Selecione a foto de perfil"
                photo={ProfilePicture}
              />
            </Col>
          </Row>
        </Col>
        
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
        </Col>
      </Row>
    </Container>
  );
};
