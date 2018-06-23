import React, { Component } from 'react';
import ReactAwesomePopover from 'react-awesome-popover';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from 'react-responsive-modal';
import axios from 'axios';

import 'react-awesome-popover/dest/react-awesome-popover.css';

const Popover = ReactAwesomePopover;

import './ContentContainer.css';

class ContentContainer extends Component {
  state = {
    value: '',
    copied: false,
    opentfs1: false,
    opentfs2: false,
    opentfs3: false
  }

  onOpenModal = () => {
    this.setState({ opentfs1: true });
  };

  onCloseModal = () => {
    this.setState({ opentfs1: false });
  };

  onOpenModal2 = () => {
    this.setState({ opentfs2: true });
  };

  onCloseModal2 = () => {
    this.setState({ opentfs2: false });
  };

  onOpenModal3 = () => {
    this.setState({ opentfs3: true });
  };

  onCloseModal3 = () => {
    this.setState({ opentfs3: false });
  };

  componentDidMount() {
    axios.get('http://api.alquran.cloud/page/1/quran-uthmani')
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const { opentfs1, opentfs2, opentfs3 } = this.state;

    return (
      <div>
        <section className='sourh'>
          <div className='speech-container'>
            <div className=''>
              <div className='bg-sour'>
                <h3>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ </h3>
                <div className='div-aya'>
                  <div>
                    <Popover>
                      <span>كَلَّآۖ إِذَا دُكَّتِ ٱلۡأَرۡضُ دَكّٗا دَكّٗا ١٢</span>
                      <div className='inner'>
                        <CopyToClipboard text={this.state.value}
                          onCopy={() => this.setState({ copied: true, value: 'shit' })}>
                          <div className='copy'>
                            <i className='far fa-copy'></i>
                      نسخ
                          </div>
                        </CopyToClipboard>
                        <div className='share'>
                          <i className='fas fa-share-alt'></i>
                      مشاركة
                        </div>
                        <div className='const'>
                          <Popover>
                            <div className='tran'>
                              <i className='fas fa-clipboard-list'></i>
                          التفسير
                            </div>
                            <div className='readers'>
                              <div>
                                <div
                                  onClick={this.onOpenModal}
                                  className='ibn-katheer'>
                                ابن كثير
                                </div>
                                <Modal
                                  open={opentfs1}
                                  onClose={this.onCloseModal}
                                  center>
                                  <div className='tafsier tafsier-ibnkther'>
                                    <div className='tfs'>
                                    kekljshfjvzfbvdfskjbvjskdfbvdkjanvfkjsavnoalkvnslin
                                    </div>
                                  </div>
                                </Modal>
                              </div>
                              <div>
                                <div
                                  onClick={this.onOpenModal2}
                                  className='al-qortoby'>
                                القرطبي
                                </div>
                                <Modal
                                  open={opentfs2}
                                  onClose={this.onCloseModal2}
                                  center>
                                  <div className='tafsier tafsier-qortoby'>
                                    <div className='tfs'></div>
                                  </div>
                                </Modal>
                              </div>
                              <div>
                                <div
                                  onClick={this.onOpenModal3}
                                  open={opentfs3}
                                  className='al-saadi'>
                                السعدي
                                </div>
                                <Modal
                                  open={opentfs3}
                                  onClose={this.onCloseModal3} center>
                                  <div className='tafsier tafsier-saadi'>
                                    <div className='tfs'></div>
                                  </div>
                                </Modal>
                              </div>
                            </div>
                          </Popover>
                        </div>
                      </div>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContentContainer;
