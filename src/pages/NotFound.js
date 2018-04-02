import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="main">
      Sorry, page Not Found!
      <p>
        <Link to="/">Return to Homepage</Link>
      </p>
    </div>
  );
}

export default NotFound;
