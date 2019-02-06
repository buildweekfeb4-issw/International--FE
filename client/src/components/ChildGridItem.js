import React from 'react';
import PropTypes from 'prop-types';

const ChildGridItem = props => {
  const changePage = e => props.changePage('SingleChildView', props.child);

  return (
    <div className='childrenGrid__child' key={props.child.id}>
      <h3>{props.child.name}</h3>
      <div>Status: {props.child.status}</div>
      <button type='button' onClick={changePage}>
        View
      </button>
    </div>
  );
};

ChildGridItem.propTypes = {
  child: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    insuranceCard: PropTypes.string,
    birthCertificateExpires: PropTypes.string,
    specialNeeds: PropTypes.string,
    representative: PropTypes.string,
    contactInfo: PropTypes.string
  }).isRequired,
  changePage: PropTypes.func.isRequired
};

export default ChildGridItem;