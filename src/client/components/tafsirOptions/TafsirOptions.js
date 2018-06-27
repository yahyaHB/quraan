import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from 'rc-dialog';

import 'rc-dialog/assets/index.css';
import './TafsirOptions.css';

const namesTrans = {
  ibnkther: 'ابن كثي',
  qortoby: 'ss كثي',
  saadi: ' كثي'
};
class TafsirOptions extends Component {

state = {
  visible: false,
  sellectedItem: {},
  width: 600,
  destroyOnClose: true,
  center: true,
  xBtn: false,
  shareUrl: window.location.href
}
onClick2 = e => {
  console.log(e);
  this.setState({
    visible: true
  });
}

onClose2 = e => {
  console.log(e);
  this.setState({
    visible: false
  });
}

opentafseer = item => {
  this.setState({ sellectedItem: item, visible: true });
}

render() {
  const tafserKets = Object.keys(this.props.tafseer);
  const style = {
    width: this.state.width
  };
  let wrapClassName = '';
  if (this.state.center) {
    wrapClassName = 'center';
  }

  return (
    <div className='readers'>
      <div>
        {
          tafserKets.map(item => (
            <div className='al-qortoby' key={item} onClick={() => {
              this.opentafseer(this.props.tafseer[item]);
              console.log(this.state.shareUrl);
            }}>{namesTrans[item]}</div>
          ))
        }
      </div>

      <Dialog
        visible={this.state.visible}
        wrapClassName={wrapClassName}
        animation='zoom'
        maskAnimation='fade'
        closable={this.state.xBtn}
        style={style}
        mousePosition={this.state.mousePosition}
        onClose={this.onClose2}
      >
        <div className='tafsier tafsier-qortoby'>
          <div className='tfs fonting'>{this.state.sellectedItem}</div>
        </div>
      </Dialog>
    </div>

  );
}
}

TafsirOptions.propTypes = {
  tafseer: PropTypes.array
};

export default TafsirOptions;
