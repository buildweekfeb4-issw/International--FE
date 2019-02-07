import React from 'react';
import { Route } from 'react-router-dom';

import './PageStyles.css';

import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import AddPage from './AddPage';
import ViewPage from './ViewPage';

const Page = props => {
  return (
    <>
      <NavBar {...props} />
      <Route exact path='/' render={props => <HomePage {...props} />} />
      <Route
        path='/addNewStudent'
        render={props => <AddPage {...props} />}
      />
      <Route
        path='/student/:id'
        render={props => <ViewPage {...props} />}
      />
    </>
  );
};

export default Page;