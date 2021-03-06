import { faBook, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { id, name, img, lesson, price, instructor, rating, instructorPhoto } =
    props.service;

  const dynamicUrl = `/service/${id}`;
  const bookIcon = <FontAwesomeIcon icon={faBook} />;
  const starIcon = <FontAwesomeIcon icon={faStar} />;
  return (
    <Col>
      <Card className="h-100 shadow">
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
                <small style={{ color: '#f38c16' }}>{starIcon}</small> 4.5 (
                {rating})
              </small>
            </p>
          </div>
          <h5>{name}</h5>
          <Card.Text className="d-flex">
            <div>
              <img className="me-3" src={instructorPhoto} alt="" />
            </div>{' '}
            <p className="fw-bold text-secondary">
              <small>{instructor}</small>
            </p>
          </Card.Text>
          <div className="d-flex justify-content-lg-between">
            <h5>${price}.00</h5>{' '}
            <Link to={dynamicUrl}>
              <Button variant="outline-success" size="sm">
                Know details
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
