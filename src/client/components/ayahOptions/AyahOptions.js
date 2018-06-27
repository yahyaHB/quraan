import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactAwesomePopover from 'react-awesome-popover';
import TafsirOptions from '../tafsirOptions/TafsirOptions.js';

import 'react-awesome-popover/dest/react-awesome-popover.css';
import './AyahOptions.css';

const Popover = ReactAwesomePopover;

class AyahOptions extends Component {
  state = {
    value: '',
    copied: false,
    tfsMode: window.location.pathname
  }

  copyTextToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = this.state.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  render() {
    return (
      <div className='popup'>
        <div className='inner'>
          <CopyToClipboard text={this.props.ayah}
            onCopy={() => {
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
          {this.state.tfsMode === '/tafsiermood' ?
            <div>
            </div>
            :
            <Popover>
              <div className='const'>
                <div className='tran'>
                  <i className='fas fa-clipboard-list'></i>
            التفسير
                </div>
              </div>
              <TafsirOptions tafseer={this.props.tafseer}/>
            </Popover>
          }
        </div>
      </div>

    );
  }
}

AyahOptions.propTypes = {
  ayah: PropTypes.string,
  tafseer: PropTypes.object
};

export default AyahOptions;
