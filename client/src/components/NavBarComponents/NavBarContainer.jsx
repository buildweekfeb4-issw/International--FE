import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarContainer = props => {
  return (
    <div>
      <NavLink to='/AddChild'>Add Child</NavLink> <br/>
      <NavLink to='/ChildViewPage'>Home</NavLink>
    </div>
  );
};

export default NavBarContainer;
