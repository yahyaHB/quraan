import React, { Component } from 'react';
import axios from 'axios';

import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      souarNames: []
    };
  }

  componentDidMount() {
    axios.get('https://qurn.herokuapp.com/api/?api_key=yahia@eslam')
      .then(res => {
        this.setState({ souarNames: res.data.refrances });
      });
  }

  state = {
    opend: false
  }

  toggleMenu = () => {
    this.setState({ opend: !this.state.opend });
  }
  render() {
    const { souarNames } = this.state;

    return (
      <div>
        <header>
          <div className='brand'>
              الفهرس
            <div onClick={this.toggleMenu} className={this.state.opend ? 'icons open' : 'icons'}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

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
        <div className='menu'>
          <div className={this.state.opend ? 'menu-1 menu-valid': 'menu-1'}>
            <div className='list-menu'>
              <ul>
                {
                  souarNames.map(item => {
                    return (<li key={item}>
                      <div className='list-box'>
                        <div className='list-number-box'>1</div>
                        <a href='#'>
                          <span className='span-right-list'>{item}</span>
                        </a>
                      </div>
                      <div className='clearfix'></div>
                    </li>);
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
