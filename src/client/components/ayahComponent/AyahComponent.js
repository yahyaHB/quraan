import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AyahOptions from '../ayahOptions/AyahOptions.js';
import axios from 'axios';
import ReactAwesomePopover from 'react-awesome-popover';

const Popover = ReactAwesomePopover;

import 'react-awesome-popover/dest/react-awesome-popover.css';
import './AyahComponent.css';

class AyahComponent extends Component {
  constructor() {
    super();
    this.state={
      ayahs: [],
      value: '',
      page: 293,
      copied: false
    };
    this.fetchinngVerses=this.fetchinngVerses.bind(this);
    this.fetchinngVerses();
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

  fetchinngVerses = () => {
    axios.get(`http://api.alquran.cloud/page/${this.state.page}/quran-uthmani`)
      .then(res => {
        console.log(res.data.data);
        this.setState({
          ayahs: res.data.data.ayahs.map(ay => ay.text)
        });
      });
  }

  render() {
    const ayahs = this.state.ayahs;

    return (
      <div>
        <ul>
          {
            ayahs.map(i => {
              return (<li key={i}>
                <div className='div-aya'>
                  <CopyToClipboard text={this.state.value}
                    onCopy={() => {
                      this.setState({ value: i });
                    }}>
                    <Popover>
                      <span onClick={
                        this.copyTextToClipboard()
                      }>{i}</span>
                      <AyahOptions />
                    </Popover>
                  </CopyToClipboard>
                </div>
              </li>);
            })
          }
        </ul>
        <a onClick={() => {
          this.setState({ page: this.state.page + 1 },() => {
            this.fetchinngVerses();
          });
        }}
        className='buttons flat-three-d emerland'>Subscribe Today</a>
      </div>
    );
  }
}

export default AyahComponent;
