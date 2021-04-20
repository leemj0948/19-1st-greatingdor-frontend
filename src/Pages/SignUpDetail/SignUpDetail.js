import React, { Component } from 'react';
import './SignUpDetail.scss';
class SignUpDetail extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: '',
      password: '',
      email_account: '',
      email_website: '',
      first_number: '010',
      second_number: '',
      last_number: '',
      date_birth: '',
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
        email: `${this.state.email_account}@${this.state.email_website}`,
        name: this.state.name,
        date_birth: this.state.date_birth,
        phone_number:
          this.state.first_number +
          this.state.second_number +
          this.state.last_number,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert('success');
        this.props.history.push('/login');
      });
  };
  render() {
    console.log(this.state);
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
                    name="email_account"
                    onChange={this.handleSignUpInput}
                  />
                  <span>@</span>
                  <input
                    type="text"
                    name="email_website"
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
                    name="date_birth"
                    onChange={this.handleSignUpInput}
                  />
                  <span>* 생년월일을 '-'로 구분하여 입력해 주세요</span>
                </div>
              </li>
              <li>
                <span className="infoTitle">휴대폰 번호</span>
                <div class="inputWrap">
                  <select name="first_number" onChange={this.handleSignUpInput}>
                    <option>010</option>
                    <option>011</option>
                    <option>016</option>
                  </select>
                  <span>-</span>
                  <input
                    type="text"
                    name="second_number"
                    onChange={this.handleSignUpInput}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    name="last_number"
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
