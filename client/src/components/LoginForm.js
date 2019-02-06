import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleTextInputChange, login } from '../store/actions';

const LoginForm = props => {
  const login = e => {
    e.preventDefault();
    props.login(props.loginUsername, props.loginPassword);
  };

  return (
    <form onSubmit={login}>
      <div>
        <label htmlFor='loginUsername'>Username</label>
        <input
          type='text'
          id='loginUsername'
          name='loginUsername'
          placeholder='Enter username'
          required
          value={props.loginUsername}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='loginPassword'>Password</label>
        <input
          type='password'
          id='loginPassword'
          name='loginPassword'
          placeholder='Enter password'
          required
          value={props.loginPassword}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  loginUsername: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    loginUsername: state.loginReducer.loginUsername,
    loginPassword: state.loginReducer.loginPassword
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    login
  }
)(LoginForm);