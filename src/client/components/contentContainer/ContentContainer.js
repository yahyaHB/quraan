import React, { Component } from 'react';
import ReactAwesomePopover from 'react-awesome-popover';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import 'react-awesome-popover/dest/react-awesome-popover.css';

const Popover = ReactAwesomePopover;

import './ContentContainer.css';

class ContentContainer extends Component {
  state = {
    value: '',
    copied: false,
    opend: false
  }

  toggleMenu = () => {
    this.setState({ opend: !this.state.opend });
  }

  render() {

    return (
      <div>
        <section className='sourh'>
          <div className='speech-container'>
            <div className=''>
              <div className='bg-sour'>
                <h3>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ </h3>
                <CopyToClipboard text={this.state.value}
                  onCopy={() => this.setState({ copied: true, value: 'shit' })}>
                  <button>Copy to clipboard with button</button>
                </CopyToClipboard>
                <div className='div-aya'>
                  <p>
                    <Popover>
                      <span>كَلَّآۖ إِذَا دُكَّتِ ٱلۡأَرۡضُ دَكّٗا دَكّٗا ١٢</span>
                      <div className='inner'>
                        <div className='copy'>
                          <i className='far fa-copy'></i>
                      نسخ
                        </div>
                        <div className='share'>
                          <i className='fas fa-share-alt'></i>
                      مشاركة
                        </div>
                        <div className='const'>
                          <div className='tran'>
                            <i className='fas fa-clipboard-list'></i>
                          التفسير
                          </div>
                        </div>
                      </div>
                    </Popover>
                  </p>
                  <div>
                    <div className='inner'>
                      <div className='copy'>
                        <i className='far fa-copy'></i>
                      نسخ
                      </div>
                      <div className='share'>
                        <i className='fas fa-share-alt'></i>
                      مشاركة
                      </div>
                      <div className='const'>
                        <div className='tran'>
                          <i className='fas fa-clipboard-list'></i>
                          التفسير
                        </div>
                        <div className='readers'>
                          <div className='ibn-katheer'>ابن كثير</div>
                          <div className='al-qortoby'>القرطبي</div>
                          <div className='al-saadi'>السعدي</div>
                        </div>
                        <div className='tafsier tafsier-ibnkther'>
                          <i className='fas fa-times'></i>
                          <div className='tfs'>كَلَّآۖ إِذَا دُكَّتِ ٱلۡأَرۡضُ دَكّٗا دَكّٗا ١٢

                          يخبر تعالى عما يقع يوم القيامة من الأهوال العظيمة فقال تعالى كلا أي حقاإذا دكت الأرض دكا دكا أي وطئت ومهدت وسويت الجبال وقام الخلائق من قبورهم لربه.
                          </div>
                        </div>
                        <div className='tafsier tafsier-qortoby'>
                          <i className='fas fa-times'></i>
                          <div className='tfs'>كَلَّآۖ إِذَا دُكَّتِ ٱلۡأَرۡضُ دَكّٗا دَكّٗا ١٢

                          قوله تعالى : كلا إذا دكت الأرض دكا دكا قوله تعالى : كلا أي ما هكذا ينبغي أن يكون الأمر . فهو رد لانكبابهم على الدنيا ، وجمعهم لها فإن من فعل ذلك يندم يوم تدك الأرض ، ولا ينفع الندم . والدك : الكسر والدق وقد تقدم . أي زلزلت الأرض ، وحركت تحريكا بعد تحريك . وقال الزجاج : أي زلزلت فدك بعضها بعضا . وقال المبرد : أي ألصقت وذهب ارتفاعها . يقال ناقة دكاء ، أي لا سنام لها ، والجمع دك . وقد مضى في سورة ( الأعراف ) و ( الحاقة ) القول في هذا . ويقولون : دك الشيء أي هدم . قال :
    هل غير غار دك غارا فانهدم
    قوله تعالى : دكا دكا أي مرة بعد مرة زلزلت فكسر بعضها بعضا فتكسر كل شيء على ظهرها . وقيل : دكت جبالها وأنشازها حتى استوت . وقيل : دكت أي استوت في الانفراش فذهب دورها وقصورها وجبالها وسائر أبنيتها . ومنه سمي الدكان ، لاستوائه في الانفراش . والدك : حط المرتفع من الأرض بالبسيط ، وهو معنى قول ابن مسعود وابن عباس : تمد الأرض مد الأديم .
                          </div>
                        </div>
                        <div className='tafsier tafsier-saadi'>
                          <i className='fas fa-times'></i>
                          <div className='tfs'>كَلَّآۖ إِذَا دُكَّتِ ٱلۡأَرۡضُ دَكّٗا دَكّٗا ١٢

                          </div>
                        </div>
                      </div>
                    </div>
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
