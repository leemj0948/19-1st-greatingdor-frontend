import React, { Component } from 'react';
import '../Login/login.scss';
import SnsWrap from '../../Components/SnsWrap/SnsWrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      click: 'false',
    };
  }
  BorderPoint = () => {
    this.setState({
      click: !this.state.click,
    });
  };
  handleLoginInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.7.158:8000/members/signin', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.Token) {
          localStorage.setItem('Token', res.Token);
          this.props.history.push('/main');
        }
      });
  };

  render() {
    console.log(this.state.click);
    return (
      <div className="login">
        <section className="loginTitle">
          <h1>로그인</h1>
          <p>로그인을 하시면 다양한 혜택을 누리실 수 있습니다.</p>
        </section>
        <section className="loginForm">
          <div className="memberWrap">
            <div
              onClick={this.BorderPoint}
              className={
                this.state.click ? 'borderPoint noBottom' : 'bottomPoint'
              }
            >
              H.point 회원
            </div>
            <div
              onClick={this.BorderPoint}
              className={
                this.state.click ? 'bottomPoint' : 'borderPoint noBottom'
              }
            >
              greating 회원
            </div>
          </div>
          <input
            className="id"
            type="text"
            name="id"
            placeholder="아이디"
            onChange={this.handleLoginInput}
          />
          <input
            className="pw"
            type="password"
            name="pw"
            placeholder="비밀번호"
            onChange={this.handleLoginInput}
          />
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
          <SnsWrap naver="네이버" kakao="카카오" google="구글" />
          <button>비회원 주문조회</button>
        </section>
      </div>
    );
  }
}

export default Login;
