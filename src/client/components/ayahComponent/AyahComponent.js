import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
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
      copied: false,
      loading: false,
      flipped: false
    };
    this.fetchinngVerses=this.fetchinngVerses.bind(this);
    this.fetchinngVerses();
  }

  mouseOut() {
    console.log('Mouse out!!!', this.state.flipped);
    this.setState({ flipped: false });
  }

  mouseOver() {
    console.log('Mouse over!!!', this.state.flipped);
    this.setState({ flipped: true });
  }

  copyTextToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = this.state.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  fetchinngVerses = () => {
    axios.get(`https://qurn.herokuapp.com/api/page/${this.state.page}?api_key=yahia@eslam`)
      .then(res => {
        this.setState({
          ayahs: res.data.page.ayahs,
          loading: false
        });
      });
  }

  render() {
    const ayahs = this.state.ayahs;

    return (
      <div>
        <div className='loader'>
          <RingLoader
            color={'#03a678'}
            loading={this.state.loading}
          />
        </div>
        <ul className='ayahsFonting'>
          {
            ayahs.map((i,id) => {
              return (<li key={id}>
                <div className='div-aya'>
                  <CopyToClipboard text={this.state.value}
                    onCopy={() => {
                      this.setState({ value: i.text });
                    }}>
                    <Popover>
                      <span onClick={
                        this.copyTextToClipboard()
                      }
                      >
                        {i.originalText}
                      </span>
                      <AyahOptions ayah={i.text} tafseer={i.tafsier}/>
                    </Popover>
                  </CopyToClipboard>
                </div>
              </li>);
            })
          }
        </ul>
        <a onClick={() => {
          this.setState({ page: this.state.page + 1, loading: true },() => {
            this.fetchinngVerses();
          });
        }}
        className='buttons flat-three-d emerland'>Subscribe Today</a>
      </div>
    );
  }
}

export default AyahComponent;
