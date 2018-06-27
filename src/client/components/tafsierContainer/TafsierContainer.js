import React, { Component } from 'react';
import axios from 'axios';

import './TafsierContainer.css';

class TafsierContainer extends Component {
  constructor() {
    super();
    this.state={
      ayahs: []
    };
    this.fetchinngVerses=this.fetchinngVerses.bind(this);
    this.fetchinngVerses();
  }

  fetchinngVerses = () => {
    axios.get('https://qurn.herokuapp.com/api/page/32?api_key=yahia@eslam')
      .then(res => {
        this.setState({
          ayahs: res.data.page.ayahs
        });
      });
  }

  render() {
    const ayahs = this.state.ayahs;

    return (
      <div className='tafsier-tfs-mode'>
        <ul>
          {
            ayahs.map((i,id) => {
              return (<li key={id}>
                <div
                  className='tfs-tfs-mode fonting-tfs-mode'
                >
                  {i.tafsier.ibnkther}
                </div>
              </li>);
            })
          }
        </ul>
      </div>
    );
  }
}

export default TafsierContainer;
