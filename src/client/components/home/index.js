import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarHome from '../navBarHome/NavBarHome.js';

import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBarHome />
        <div className='whole'>
          <div>
            <div className='home__container'>
              <div className='home__subContainer'>
                <img className='image_bg' src='./assets/bgt.png' />
                <div className='card-container'>
                  <Link to={'/read-mode'}>
                    <div className='card'>
                      <div className='card-image'>
                        <img src='http://www.loveo.cc/wp-content/uploads/2017/02/card-image.jpg'
                          alt='Orange' />
                      </div>
                      <div className='card-body'>
                        <div className='card-date'>
                          <time>
                20 Novembre 1992
                          </time>
                        </div>
                        <div className='card-title'>
                          <h3>
                Lorem Ipsum
                          </h3>
                        </div>
                        <div className='card-exceprt'>
                          <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus
                autem consectetur voluptate facere at, omnis ab optio placeat officiis!
                Animi modi harum enim quia veniam consectetur unde autem inventore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={'/tafsiermood'}>
                    <div className='card'>
                      <div className='card-image'>
                        <img src='http://www.loveo.cc/wp-content/uploads/2017/02/card-image.jpg'
                          alt='Orange' />
                      </div>
                      <div className='card-body'>
                        <div className='card-date'>
                          <time>
                20 Novembre 1992
                          </time>
                        </div>
                        <div className='card-title'>
                          <h3>
                Lorem Ipsum
                          </h3>
                        </div>
                        <div className='card-exceprt'>
                          <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus
                autem consectetur voluptate facere at, omnis ab optio placeat officiis!
                Animi modi harum enim quia veniam consectetur unde autem inventore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
