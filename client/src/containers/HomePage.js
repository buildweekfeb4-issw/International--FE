import React from 'react';

import './PageStyles.css';

import NavBar from '../components/NavBar';
import HomeChildGrid from '../components/HomeChildGrid';
import ChildAddPage from './ChildAddPage';
import ChildViewPage from './ChildViewPage';

class HomePage extends React.Component {
  state = {
    currentPage: 'Home',
    currentChild: null
  };

  // changePage = (page, child) => {
  //   this.setState({
  //     currentPage: page,
  //     currentChild: page === 'SingleChildView' && child ? child : null
  //   });
  // };

  changePage = (page, child) => {
    this.setState({
      currentPage: page,
      currentChild: page === 'ChildView' && child ? child : null
    });
  };

  render() {
    switch (this.state.currentPage) {
      case 'Home':
        return (
          <>
            <NavBar changePage={this.changePage} />
            <HomeChildGrid changePage={this.changePage} />
          </>
        );
      case 'ChildAdd': //removed Single
        return (
          <>
            <NavBar changePage={this.changePage} />
            <ChildAddPage />                    
          </>
        );
      case 'ChildView':
        return (
          <>
            <NavBar changePage={this.changePage} />
            <ChildViewPage child={this.state.currentChild} />
          </>
        );
      default:
        return null;
    }
  }
}
export default HomePage;