import React, { Component } from 'react';
import {
  FacebookShareButton,
  FacebookIcon
} from 'react-share';
import ReactAwesomePopover from 'react-awesome-popover';

import 'react-awesome-popover/dest/react-awesome-popover.css';

const Popover = ReactAwesomePopover;

class AyahOptions extends Component {
  state = {
    shareUrl: window.location.hostname
  }
  render() {
    return (
      <div>
        <div className='inner'>
          <Popover>
            <div className='share'>
              <i className='fas fa-share-alt'></i>
            مشاركة
            </div>
            <FacebookShareButton
              url={this.state.shareUrl}
              className='Demo__some-network__share-button'>
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
          </Popover>
        </div>
      </div>

    );
  }
}

export default AyahOptions;
