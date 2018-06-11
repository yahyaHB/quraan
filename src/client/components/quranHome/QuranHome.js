import React, { Component } from 'react';
import NavBar from '../navBar/NavBar.js';
import ContentContainer from '../contentContainer/ContentContainer.js';

import './QuranHome.css';

class QuranHome extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentContainer />
      </div>
    );
  }
}

export default QuranHome;
