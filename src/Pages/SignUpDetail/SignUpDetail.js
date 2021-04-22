/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import './SignUpDetail.scss';
class SignUpDetail extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: '',
      password: '',
      emailAccount: '',
      emailWebsite: '',
      firstNumber: '010',
      secondNumber: '',
      lastNumber: '',
      dateBirth: '',
    };
  }
  handleSignUpInput = e => {
    const { name, value } = e.target; // const name = e.target.name
    this.setState({
      [name]: value,
    });
  };
  goToLogin = e => {
    e.preventDefault();
    fetch('http://10.58.7.158:8000/members/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        account: this.state.id,
        password: this.state.password,
        email: `${this.state.emailAccount}@${this.state.emailWebsite}`,
        name: this.state.name,
        date_birth: this.state.dateBirth,
        phone_number:
          this.state.firstNumber +
          this.state.secondNumber +
          this.state.lastNumber,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('success');
          this.props.history.push('/login');
        }
      });
  };
  render() {
    return (
      <div className="signUpDetail">
        <h1 class="signUpTitle">정보입력</h1>
        <article className="detailFill">
          <div className="memberInfoTitle">회원 정보 입력(필수)</div>
          <form method="POST">
            <ul className="infoTable">
              <li>
                <span className="infoTitle">이름</span>
                <div class="fillUpRule">
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleSignUpInput}
                  />
                  <span>* 한글은 10자, 영문은 20자 이내로 입력해 주세요</span>
                </div>
              </li>
              <li>
                <span className="infoTitle">아이디</span>
                <div class="fillUpRule">
                  <input
                    type="text"
                    name="id"
                    onChange={this.handleSignUpInput}
                  />
                  <span>
                    * 6자리 이상의 영문 혹은 영문, 숫자를 조합하여 입력해 주세요
                  </span>
                </div>
                <button>중복확인</button>
              </li>
              <li>
                <span className="infoTitle">비밀번호</span>
                <div class="fillUpRule">
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleSignUpInput}
                  />
                  <span>
                    * 영문 대소문자, 숫자, 특수문자 중 3개 이상을 조합하여 8자리
                    이상 입력해 주세요
                  </span>
                </div>
              </li>
              <li>
                <span className="infoTitle">비밀번호 확인</span>
                <input type="password" />
              </li>
              <li>
                <span className="infoTitle">이메일</span>
                <div class="inputWrap">
                  <input
                    type="text"
                    name="emailAccount"
                    onChange={this.handleSignUpInput}
                  />
                  <span>@</span>
                  <input
                    type="text"
                    name="emailWebsite"
                    onChange={this.handleSignUpInput}
                    className="marginRight"
                  />
                  <select>
                    <option>직접입력</option>
                    <option>naver.com</option>
                    <option>gmail.com</option>
                  </select>
                </div>
                <button>중복확인</button>
              </li>
              <li>
                <span className="infoTitle">생년월일</span>
                <div class="fillUpRule">
                  <input
                    type="text"
                    name="dateBirth"
                    onChange={this.handleSignUpInput}
                  />
                  <span>* 생년월일을 '-'로 구분하여 입력해 주세요</span>
                </div>
              </li>
              <li>
                <span className="infoTitle">휴대폰 번호</span>
                <div class="inputWrap">
                  <select name="firstNumber" onChange={this.handleSignUpInput}>
                    <option>010</option>
                    <option>011</option>
                    <option>016</option>
                  </select>
                  <span>-</span>
                  <input
                    type="text"
                    name="secondNumber"
                    onChange={this.handleSignUpInput}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    name="lastNumber"
                    onChange={this.handleSignUpInput}
                  />
                </div>
                <button>중복확인</button>
              </li>
            </ul>
            <footer className="footer">
              <button>취소</button>
              <button type="submit" value="회원가입" onClick={this.goToLogin}>
                회원가입
              </button>
            </footer>
          </form>
        </article>
      </div>
    );
  }
}

export default SignUpDetail;
