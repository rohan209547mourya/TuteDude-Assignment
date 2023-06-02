import React from 'react';

const NavItem = ({ title, path }) => (
  <a to={path} className="font-medium text-lg text-center text-primary/25">
    {title}
  </a>
);

export default NavItem;
