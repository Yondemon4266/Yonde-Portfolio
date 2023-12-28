import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
      <nav className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    );
};

export default Navigation;