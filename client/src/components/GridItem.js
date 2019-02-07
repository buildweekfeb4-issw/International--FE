import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const GridItem = props => {
  return (
    <div className='studentsGrid__student'>
      <h3>{props.student.name}</h3>
      <span>Status: </span>
      <span>{props.student.status}</span>
      <div>
        <NavLink to={`/student/${props.student.id}`}>View All Info</NavLink>
      </div>
    </div>
  );
};

GridItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default GridItem;