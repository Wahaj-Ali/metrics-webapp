import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Mobile Brands',
    },
    {
      id: 2,
      path: '/MobileDetails',
      text: 'Mobile Specifications',
    },
  ];
  return (
    <nav className="NavBar" data-testid="navbar">
      <ul className="MenuNav">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
