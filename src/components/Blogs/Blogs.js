import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`./blogDB.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <Container className="my-5">
      <div className="my-5">
        <h2 className="text-center">
          Read our latest blog to improve your knowladge
        </h2>
        <p className="text-secondary text-center">
          You`re guaranteed to find something that`s right for you.
        </p>
      </div>

      <Row xs={1} md={2} className="g-4">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
