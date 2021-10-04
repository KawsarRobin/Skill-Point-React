import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Blog = (props) => {
  const { name, blogImg, instructor, time, type } = props.blog;
  return (
    <Col>
      <Card className="h-100">
        <div className="row">
          <div className="col-md-5">
            <img src={blogImg} alt="" className="w-100 h-100 p-2" />
          </div>
          <div className="col-md-7 p-2">
            <h6>Tropic: {type}</h6>
            <br />
            <h5>{name}</h5>
            <div className="d-flex justify-content-md-between p-2">
              <p>
                <small>By: {instructor}</small>
              </p>
              <p>
                <small>{time}</small>
              </p>
            </div>
            <Button variant="outline-success" size="sm">
              Read More...
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Blog;
