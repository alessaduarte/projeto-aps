import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Alterar Informações</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Nome</Form.Label>
                <Form.Control required type="text" placeholder="Informe o seu nome" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control required type="text" placeholder="Informe o seu sobrenome" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Data de Nascimento</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="dd/mm/aaaa"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Localização</Form.Label>
                <Form.Control required type="text" placeholder="Informe a cidade e o estado" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Área de Atuação</Form.Label>
                <Form.Control required type="text" placeholder="Digite a área de atuação" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Disponibilidade</Form.Label>
                <Form.Control required type="text" placeholder="Informe a disponibilidade para aulas" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>E-mail</Form.Label>
                <Form.Control required type="email" placeholder="exemplo@email.com" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control required type="number" placeholder="+55 (00) 9 0000-0000" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <Button variant="primary" type="submit">Salvar Alterações</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
