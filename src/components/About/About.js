import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const About = () => {
  const CheckIcon = <FontAwesomeIcon icon={faCheck} />;
  return (
    <div className="bg-light p-5">
      <Container className="d-flex justify-content-evenly">
        <div>
          <img
            className="w-75 rounded rounded-5"
            src={`https://themepure.net/template/educal/educal/assets/img/about/about.jpg`}
            alt=""
          />
        </div>
        <div>
          <h1 className="fw-bolder">Achieve Your Goals With Us</h1>
          <p>
            Our mission is to promote student achievement and preparation for
            global competitiveness by fostering educational excellence and
            ensuring equal access.
          </p>
          <p>
            This Plateform was created in 2022 by <strong>Kawsar Robin</strong>.
            We have 4,400 employees and $68 billion budget are dedicated to:
          </p>
          <h6>{CheckIcon} Upskill your organization.</h6>
          <h6>{CheckIcon} Access more then 100K online courses</h6>
          <h6>{CheckIcon} Learn the latest skills</h6>
          <br />
          <Button className="shadow" variant="outline-primary">
            Apply Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default About;
