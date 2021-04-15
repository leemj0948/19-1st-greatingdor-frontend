import React, { Component } from 'react';
import '../Login/Login.scss';
import Naver from '../../Img/icon-naver.png';
import Kakao from '../../Img/icon-kakao.png';
import Google from '../../Img/icon-google.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      // name: '',
      id: '',
      pw: '',
      // email: '',
      // date_birth: '',
      // phone_number: '',
      // borderBottom: '',
      // borderAll: '',
    };
  }
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(e.target.value);
  };

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.58.131:8000/members/signin', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.id,
        password: this.state.pw,
        // email: this.state.email,
        // name: 'seri park',
        // date_birth: '19941022',
        // phone_number: '01032441082',
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // if (result.MESSAGE === 'SUCCESS') {
        //   alert('성공');
        //   // 메인페이지로 이동
        // } else {
        //   alert('fail'); //에러메세지
        // }
      });
  };
  // leftBorderPoint = () => {
  //   this.setState({
  //    borderAll:'borderPoint'
  //   });
  // };
  // rightBorderPoint = () => {
  //   this.setState({
  //     borderAll:'borderPoint'
  //   });
  // };
  // bottomLine=()=>{
  //   this.setState({
  //   bottomBottom:'bottomPoint'
  //   });
  // }
  render() {
    return (
      <div className="login">
        <section className="loginTitle">
          <h1>로그인</h1>
          <p>로그인을 하시면 다양한 혜택을 누리실 수 있습니다.</p>
        </section>
        <section className="loginForm">
          <div className="memberWrap">
            <div>H.point 회원</div>
            <div>greating 회원</div>
          </div>
          {/* <form action="get"> */}
          <input
            className="id"
            type="text"
            name="id"
            placeholder="아이디"
            onChange={this.handleInput}
          />
          <input
            className="pw"
            type="password"
            name="pw"
            placeholder="비밀번호"
            onChange={this.handleInput}
          />
          {/* </form> */}
          <div className="saveId">
            <button />
            <p>아이디저장</p>
          </div>
          <button className="loginButton" onClick={this.goToMain}>
            로그인
          </button>
          <ul className="findOrRegister">
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
            <li>회원가입</li>
          </ul>
        </section>
        <section className="loginLink">
          <p>SNS 로그인</p>
          <div className="snsWrap">
            <div>
              <img src={Naver} alt="#" />
              <p>네이버</p>
            </div>
            <div>
              <img src={Kakao} alt="#" />
              <p>카카오</p>
            </div>
            <div>
              <img src={Google} alt="#" />
              <p>구글</p>
            </div>
          </div>
          <button>비회원 주문조회</button>
        </section>
      </div>
    );
  }
}

export default Login;
