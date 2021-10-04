import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`./servicesDb.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bolder">
        Find The Right Online Course For You
      </h2>
      <p className="text-secondary text-center">
        You`re guaranteed to find something that`s right for you.
      </p>

      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
