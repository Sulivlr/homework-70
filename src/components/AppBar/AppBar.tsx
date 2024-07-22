import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Appbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <span className="navbar-brand">
          <Link to="/" className="nav-link">Contacts</Link>
        </span>
        <ul className="navbar-nav mr-auto flex-row flex-nowrap gap-2">
          <li className="nav-item">
            <NavLink to="/new-contact" className="nav-link">Add new Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;