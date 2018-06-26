import React, { Component } from 'react';
import AyahComponent from '../ayahComponent/AyahComponent.js';

import './ContentContainer.css';

class ContentContainer extends Component {

  render() {
    return (
      <div>
        <section className='sourh'>
          <div className='speech-container'>
            <h3>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ </h3>
            <AyahComponent />
          </div>
        </section>
      </div>
    );
  }
}

export default ContentContainer;
