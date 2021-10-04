import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';

const ServiceFeatures = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`./servicesDb.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div style={{ backgroundColor: '#edeef3' }}>
      <Container className="py-5">
        <div className="py-5">
          <h2 className="text-center fw-bolder ">
            Explore Our popular Course Service
          </h2>
          <p className="text-secondary text-center">
            You`re guaranteed to find something that`s right for you.
          </p>
        </div>
        <Row xs={2} md={4} className="g-4">
          {services.slice(0, 4).map((service) => (
            <ServiceDisplay key={service.id} service={service}></ServiceDisplay>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServiceFeatures;
