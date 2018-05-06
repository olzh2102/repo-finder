import React, { Component } from 'react';
import { Navbar } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Navbar className="blue-grey darken-4" brand='Repo-Search' right></Navbar>
    );
  }
}

export default Header;