import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';

import SignIn from './containers/SignIn';
import Page from './containers/Page';

const App = props => {
  const { loggedInUser } = props;

  return loggedInUser ? (
    <Page {...props} />
  ) : (
    <SignIn />
  );
};

App.propTypes = {
  loggedInUser: PropTypes.string
};

const mapStateToProps = state => {
  return { loggedInUser: state.loginReducer.loggedInUser };
};

export default connect(mapStateToProps)(App);