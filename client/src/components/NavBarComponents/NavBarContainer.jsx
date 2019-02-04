import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarContainer = props => {
  return (
    <div>
      <NavLink to='/AddChild'>Add Child</NavLink>
    </div>
  );
};

export default NavBarContainer;