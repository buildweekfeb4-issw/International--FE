import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './App.css';

import SignIn from './containers/SignIn';
import HomePage from './containers/HomePage';

const App = props => {
  const { loggedInUser } = props

  return (
    <div className='App'>
      <Route
        exact
        path='/'
        render={props =>
          !console.log(loggedInUser) &&
          loggedInUser ? (
            <HomePage {...props} />
          ) : (
            <SignIn {...props} />
          )
        }
      />
    </div>
  );
};

App.propTypes = {
  loggedInUser: PropTypes.string
};

const mapStateToProps = state => {
  return { loggedInUser: state.loginReducer.loggedInUser };
};

export default connect(mapStateToProps)(App);