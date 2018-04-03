import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="main content">
      Sorry, page Not Found!
      <p>
        <Link to="/">Return to Homepage</Link>
      </p>
    </main>
  );
}

export default NotFound;
