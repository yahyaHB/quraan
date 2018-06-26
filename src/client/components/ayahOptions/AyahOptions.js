import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactAwesomePopover from 'react-awesome-popover';
import TafsirOptions from '../tafsirOptions/TafsirOptions.js';

import 'react-awesome-popover/dest/react-awesome-popover.css';
import './AyahOptions.css';

const Popover = ReactAwesomePopover;

class AyahOptions extends Component {
  state = {
    value: '',
    copied: false
  }

  copyTextToClipboard = text => {
    const textArea = document.createElement('textarea');
    textArea.value = this.state.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    console.log(text);
  }

  render() {

    return (
      <div className='popup'>
        <div className='inner'>
          <CopyToClipboard text={this.state.value}
            onCopy={() => {
              console.log(this.state.value);
              this.setState({ copied: true });
            }}>
            <div onClick={
              this.copyTextToClipboard()
            }
            className='copy'>
              <i className='far fa-copy'></i>
              نسخ
            </div>
          </CopyToClipboard>
          <div className='share'>
            <i className='fas fa-share-alt'></i>
            مشاركة
          </div>
          <Popover>
            <div className='const'>
              <div className='tran'>
                <i className='fas fa-clipboard-list'></i>
                التفسير
              </div>
            </div>
            <TafsirOptions />
          </Popover>
        </div>
      </div>

    );
  }
}

export default AyahOptions;
