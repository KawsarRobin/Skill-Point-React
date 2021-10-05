import {
  faArrowRight,
  faBook,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDisplay = (props) => {
  const { id, name, img, lesson, price, instructor, rating, instructorPhoto } =
    props.service;

  const dynamicUrl = `/service/${id}`;
  const bookIcon = <FontAwesomeIcon icon={faBook} />;
  const starIcon = <FontAwesomeIcon icon={faStar} />;
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <Col>
      <Card className="shadow h-100">
        <Card.Img variant="top" src={img} className="p-2" />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <p>
              <small>
                {bookIcon} {lesson} Lesson
              </small>
            </p>
            <p>
              <small>
                <span style={{ color: '#f38c16' }}>{starIcon}</span>
                4.5 ({rating})
              </small>
            </p>
          </div>
          <h5>{name}</h5>
          <Card.Text className="d-flex">
            <div>
              <img className="me-3" src={instructorPhoto} alt="" />
            </div>
            <p className="fw-bold text-secondary">
              <small>{instructor}</small>
            </p>
          </Card.Text>
          <div className="d-flex justify-content-lg-between">
            <h5>${price}.00</h5>
            <Link className="text-decoration-none" to={dynamicUrl}>
              <h6>Know details {arrowIcon}</h6>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceDisplay;
