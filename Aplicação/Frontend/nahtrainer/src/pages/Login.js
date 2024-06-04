import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import BgImage from "../assets/img/illustrations/signin.svg";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-end form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
          <Col xs={12} lg={20} className="p-0">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Login</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>E-mail:</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="exemplo@email.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Senha:</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Informe a sua senha" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-end align-items-center mb-4">
                      <Card.Link className="small text-end text-yellow">Esqueci minha Senha</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Entrar
                  </Button>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Ainda não possui uma conta?
                    <Card.Link as={Link} to={Routes.Cadastrar.path} className="fw-bold text-yellow">
                      {` Cadastre-se `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
// import { Link } from 'react-router-dom';

// import { Routes } from "../routes";
// import BgImage from "../assets/img/illustrations/signin.svg";


// export default () => {
//   return (
//     <main>
//       <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
//         <Container>
//           <p className="text-center">
//             <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
//               <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
//             </Card.Link>
//           </p>
//           <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
//             <Col xs={12} className="d-flex align-items-center justify-content-center">
//               <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
//                 <div className="text-center text-md-center mb-4 mt-md-0">
//                   <h3 className="mb-0">Login</h3>
//                 </div>
//                 <Form className="mt-4">
//                   <Form.Group id="email" className="mb-4">
//                     <Form.Label>E-mail:</Form.Label>
//                     <InputGroup>
//                       <InputGroup.Text>
//                         <FontAwesomeIcon icon={faEnvelope} />
//                       </InputGroup.Text>
//                       <Form.Control autoFocus required type="email" placeholder="exemplo@email.com" />
//                     </InputGroup>
//                   </Form.Group>
//                   <Form.Group>
//                     <Form.Group id="password" className="mb-4">
//                       <Form.Label>Senha:</Form.Label>
//                       <InputGroup>
//                         <InputGroup.Text>
//                           <FontAwesomeIcon icon={faUnlockAlt} />
//                         </InputGroup.Text>
//                         <Form.Control required type="password" placeholder="Informe a sua senha" />
//                       </InputGroup>
//                     </Form.Group>
//                     <div className="d-flex justify-content-end align-items-center mb-4">
//                       <Card.Link className="small text-end text-yellow">Esqueci minha Senha</Card.Link>
//                     </div>
//                   </Form.Group>
//                   <Button variant="primary" type="submit" className="w-100">
//                     Entrar
//                   </Button>
//                 </Form>

//                 <div className="mt-3 mb-4 text-center">
//                   <span className="fw-normal">ou</span>
//                 </div>
//                 <div className="d-flex justify-content-center my-4">
//                   <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
//                     <FontAwesomeIcon icon={faGoogle} />
//                   </Button>
//                   <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
//                     <FontAwesomeIcon icon={faFacebookF} />
//                   </Button>
//                   <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
//                     <FontAwesomeIcon icon={faTwitter} />
//                   </Button>
//                   <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
//                     <FontAwesomeIcon icon={faGithub} />
//                   </Button>
//                 </div>
//                 <div className="d-flex justify-content-center align-items-center mt-4">
//                   <span className="fw-normal">
//                     Ainda não possui uma conta?
//                     <Card.Link as={Link} to={Routes.Cadastrar.path} className="fw-bold text-yellow">
//                       {` Cadastre-se `}
//                     </Card.Link>
//                   </span>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </main>
//   );
// };
