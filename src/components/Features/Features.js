import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Features = () => {
  return (
    <div style={{ backgroundColor: '#edeef3' }}>
      <Container>
        <div className="text-center py-5">
          <h2 className="fw-bolder">Why An Scholercity Out Of The Ordinary</h2>
          <p className="text-secondary">
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        <Row xs={2} md={4} className="g-4">
          <Col>
            <Card
              className="p-4 text-white h-100 shadow"
              style={{ backgroundColor: '#2d69f0' }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2000/2000887.png"
                alt=""
                className="w-50"
              />
              <h5>4,000 Online courses</h5>
              <p>You can find your courses to develope skills</p>
            </Card>
          </Col>
          <Col>
            <Card
              className="p-4 text-white h-100 shadow"
              style={{ backgroundColor: '#dd246e' }}
            >
              <img
                src="https://img-premium.flaticon.com/png/128/3850/premium/3850259.png?token=exp=1633362262~hmac=61b823b47afb20d7a4f8d35714c22572"
                alt=""
                className="w-50"
              />
              <h5>Job placement Support</h5>
              <p>You will get full guideline for your job from here</p>
            </Card>
          </Col>
          <Col>
            <Card
              className="p-4 text-white h-100 shadow"
              style={{ backgroundColor: '#8007e6' }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/921/921305.png"
                alt=""
                className="w-50"
              />
              <h5>Lifetime Slack chat support</h5>
              <p>Lifetime support with chat for your anykind of problems</p>
            </Card>
          </Col>

          <Col>
            <Card
              className="p-4 text-white h-100 shadow"
              style={{ backgroundColor: '#0cae74' }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2941/2941556.png"
                alt=""
                className="w-50"
              />
              <h5>Research and Innovation</h5>
              <p>Chance to research with projecs and develope skills</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
