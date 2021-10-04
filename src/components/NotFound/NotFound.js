import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center p-5">
      <img
        src="https://themepure.net/template/educal/educal/assets/img/error/error.png"
        alt=""
      />
      <h1>Page Not Found!</h1>
      <h4>Please try searching for some other page. Back to home</h4>
      <Link to="/home">
        <br />
        <button className="shadow btn btn-primary btn-lg"> Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
