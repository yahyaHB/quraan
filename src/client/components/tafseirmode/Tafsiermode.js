import React, { Component } from 'react';
import ContentContainer from '../contentContainer/ContentContainer.js';
import TafsierContainer from '../tafsierContainer/TafsierContainer.js';
import NavBar from '../navBar/NavBar.js';

import './Tafsiermode.css';

class Tafsiermode extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='tfsMode'>
          <ContentContainer className='contentSection' />
          <TafsierContainer className='tafseirSection' />
        </div>
      </div>
    );
  }
}

export default Tafsiermode;
