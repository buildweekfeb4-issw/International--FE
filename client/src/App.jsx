import React from 'react';
import { Route } from "react-router-dom";

import './App.css';

import NavBarContainer from './components/NavBarComponents/NavBarContainer';

class App extends React.Component {
  state = {
    loggedInUser: ''
  };

  render() {
    return (
      <div className='App'>
        <Route
          path='/'
          render={props =>
            this.state.loggedInUser ? <NavBarContainer /> : <div>LOG IN</div>
          }
        />
        <NavBarContainer />
      </div>
    );
  }
}

export default App;
