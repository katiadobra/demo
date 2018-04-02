import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" className="btn" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/data" className="btn">
            Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
