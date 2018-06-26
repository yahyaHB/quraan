import React, { Component } from 'react';
import Dialog from 'rc-dialog';

import 'rc-dialog/assets/index.css';
import './TafsirOptions.css';

const fake = [
  {
    id: 1,
    text: 'ابن كثير',
    tafseer: 'fsdf sdfds fsdf'
  },
  {
    id: 2,
    text: 'القرطبي',
    tafseer: 'fsdf sdfdsdcsdvas fsdf'
  },
  {
    id: 3,
    text: 'السعدي',
    tafseer: 'fsdf sdfdasvdsaasdvdsavdds fsdf'
  }
];

class TafsirOptions extends Component {

state = {
  visible: false,
  sellectedItem: {},
  width: 600,
  destroyOnClose: true,
  center: true,
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
          fake.map(item => {

            return (
              <div className='al-qortoby' key={item.id} onClick={() => {
                this.opentafseer(item);
                console.log(this.state.shareUrl);
              }}>{item.text}</div>
            );
          })
        }
      </div>

      <Dialog
        visible={this.state.visible}
        wrapClassName={wrapClassName}
        animation='zoom'
        maskAnimation='fade'
        style={style}
        mousePosition={this.state.mousePosition}
        onClose={() => {
          this.setState({ visible: false, sellectedItem: {} });
        }}
      >
        <div className='tafsier tafsier-qortoby'>
          <div className='tfs'>{this.state.sellectedItem.tafseer}</div>
        </div>
      </Dialog>

    </div>

  );
}
}

export default TafsirOptions;
