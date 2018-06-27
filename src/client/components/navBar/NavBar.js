import React, { Component } from 'react';
import Menu from '../menu/Menu.js';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <header>
          <Menu />

          <div className='name-sourh'>
            <div className='cont'>
                  مكيه
            </div>
            <div className='name'>
                  سورة عبس
            </div>
            <div className='num-ayat'>
                  آياتها : ٤٢
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
