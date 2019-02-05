import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import authentication from './components/authentication/authentication';
import HomePage from './components/HomePageComponents/HomePage';
import NavBarContainer from './components/NavBarComponents/NavBarContainer';
import ChildAddPage from './components/ChildComponents/ChildAddPage';

class App extends React.Component {
  state = {
    loggedInUser: ''
  };

  render() {
    return (
      <div className='App'>
        <Route
          exact
          path='/'
          render={props => (
            <>
              <NavBarContainer />
              <HomePage />
            </>
          )}
        />
        <Route path='/addchild' component={ChildAddPage} />
      </div>
    );
  }
}
export default authentication(App);
