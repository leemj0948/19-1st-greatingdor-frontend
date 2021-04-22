/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import './SignUp.scss';
import SnsWrap from '../../Components/SnsWrap/SnsWrap';
import GreatingLogo from '../../Img/greatingdor-logo.jpg';
import HpointLogo from '../../Img/hpoint-logo.jpg';

export class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <article className="signUpTitle">
          <p className="signUpTitleWords">회원가입</p>
          <p className="signUpGreetingWords">그리팅도르에 오신걸 환영합니다</p>
          <p className="signUpGreetingDetails">
            그리팅몰의 회원이되시면 할인쿠폰과 포인트 적립 등의 특별한 혜택을
            누리실 수 있습니다. 아래 중 회원타입을 선택하신 후 회원가입을
            진행해주시기 바랍니다.
          </p>
        </article>
        <article className="signUpMember">
          <div className="integratedMember">
            <b>통합회원 가입</b>
            <img src={HpointLogo} alt="h-point 로고" />
            <ul>
              {SENTENCE.map(p => (
                <li>{p.content}</li>
              ))}
            </ul>
            <a href="https://www.h-point.co.kr/cu/main/index.nhd">
              <button>통합회원가입하기</button>
            </a>
          </div>
          <div className="generalMember">
            <b>그리팅 일반회원 가입</b>
            <img src={GreatingLogo} alt="greating 로고"></img>
            <p>
              본인인증 절차없이 사용중인 이메일 또는 SNS계정 정보로 간편하게
              가입하실 수 있습니다.
            </p>
            <a href="/sign-up-detail">
              <button>일반회원 가입하기</button>
            </a>
          </div>
        </article>
        <article className="signUpSns">
          <p>SNS 가입하기</p>
          <SnsWrap
            naver="네이버로 회원가입"
            kakao="카카오로 회원가입"
            google="구글로 회원가입"
          />
        </article>
      </div>
    );
  }
}
export default SignUp;

const SENTENCE = [
  {
    id: 1,
    content:
      '그리팅 사이트와 H.Point 멤버십을 동시에 가입할 수 있는 편리한 서비스입니다',
  },
  {
    id: 2,
    content:
      '그리팅 몰 구매금액의 0.1~0.5%가 H.Point로 적립되며, 100Point 이상 보유 시 현금처럼 사용 가능합니다',
  },
];
