import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleTextInputChange, registerNewUser } from '../store/actions';

const RegistrationForm = props => {
  const registerNewUser = e => {
    e.preventDefault();
    props.registerNewUser(
      props.registrationUsername,
      props.registrationPassword
    );
  };

  return (
    <form onSubmit={registerNewUser}>
      <h2>Register</h2>
      <div>
        <label htmlFor='registrationUsername'>Username</label>
        <input
          type='text'
          id='registrationUsername'
          name='registrationUsername'
          placeholder='Username'
          required
          value={props.registrationUsername}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='registrationPassword'>Password</label>
        <input
          type='password'
          id='registrationPassword'
          name='registrationPassword'
          placeholder='Password'
          required
          value={props.registrationPassword}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <button>Register Now</button>
      </div>
    </form>
  );
};

RegistrationForm.propTypes = {
  registrationUsername: PropTypes.string.isRequired,
  registrationPassword: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  registerNewUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    registrationUsername: state.registration.registrationUsername,
    registrationPassword: state.registration.registrationPassword
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    registerNewUser
  }
)(RegistrationForm);