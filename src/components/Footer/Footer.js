import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
const Footer = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div style={{ backgroundColor: '#edeef3' }}>
      <Container>
        <Row xs={1} md={4} className="p-5 g-3 h-100">
          <Col>
            <h5>Skill Point</h5>
            <p>
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </p>
            <div className="fw-bolder d-flex">
              <h3>
                <i className="fab fa-facebook "></i>
              </h3>
              <h3>
                <i className="fab fa-instagram mx-3"></i>
              </h3>
              <h3>
                <i className="fab fa-dribbble"></i>
              </h3>
            </div>
          </Col>
          <Col>
            <h5>Company</h5>
            <p>About</p>
            <p>Services</p>
            <p>Events</p>
            <p>Instructor</p>
            <p>Career</p>
            <p>Become a Teacher</p>
            <p>Contact</p>{' '}
          </Col>
          <Col>
            <h5>Platform</h5>
            <p>Browse Library</p>
            <p>Partners</p>
            <p>News & blogs</p>
            <p>FAQs</p>
            <p>Tutorials</p>{' '}
          </Col>
          <Col>
            <h5>Subscribe</h5>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Your email..."
                aria-label="Recipient's username"
              />
              <Button variant="secondary" size="sm">
                {arrowIcon}
              </Button>
            </InputGroup>
            <p>Get the latest news and updates right at your inbox.</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <h6 className="text-center py-2 fw-bolder">
        <small>Copyright © 2022 Kawsar Robin All rights reserved.</small>
      </h6>
    </div>
  );
};

export default Footer;
