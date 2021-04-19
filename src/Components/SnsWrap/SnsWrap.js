/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Naver from '../../Img/icon-naver.png';
import Kakao from '../../Img/icon-kakao.png';
import Google from '../../Img/icon-google.png';
import '../SnsWrap/SnsWrap.scss';

class SnsWrap extends Component {
  render() {
    return (
      <div className="snsWrap">
        <div>
          <img src={Naver} alt="#" />
          <p>{this.props.naver}</p>
        </div>
        <div>
          <img src={Kakao} alt="#" />
          <p>{this.props.kakao}</p>
        </div>
        <div>
          <img src={Google} alt="#" />
          <p>{this.props.google}</p>
        </div>
      </div>
    );
  }
}

export default SnsWrap;
