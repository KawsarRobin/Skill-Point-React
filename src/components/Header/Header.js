import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Naviagtion from '../Navigation/Navigation';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#b8dde3' }}>
      <Naviagtion></Naviagtion>
      <Container>
        <Row xs={1} md={2} className="gx-md-5 gx-sm-3 p-5 ">
          <Col className="pt-5 mb-5">
            <h6>Learn and Achieve</h6>
            <h1 className="fw-bolder">Find the right online tutor for you</h1>
            <h5>
              Meet university, and cultural institutions, who'll share their
              experience
            </h5>
            <br />
            <Button className="shadow" variant="secondary">
              Ready to get started?
            </Button>
          </Col>

          <Col>
            <img
              src="https://themepure.net/template/educal/img/hero/hero-2/hero.png"
              alt=""
              className="w-50 ms-md-5"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
