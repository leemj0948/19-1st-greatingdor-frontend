import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <footer id="footer">
          <div className="footer_header">
            <div className="footer_header_list">
              <span>
                <Link to="#">회사소개 |</Link>
              </span>
              <span>
                <Link to="#">이용약관 |</Link>
              </span>
              <span className="personal_info">
                <Link to="#">개인정보처리방침 |</Link>
              </span>
              <span>
                <Link to="#">멤버십 프로그램</Link>
              </span>
            </div>
            <select className="family_site">
              <option>현대백화점 관계사</option>
              <option>현대 Hmall</option>
              <option>더현대닷컴</option>
            </select>
          </div>
          <div className="footer_contents">
            <div className="customer_center">
              <div className="customer_center_title">고객센터</div>
              <div className="phone">1800-0700</div>
              <div>평일,토요일 7:00 ~ 18:00</div>
              <div>공휴일 7시~ 13시 (일요일 휴무)</div>
              <div>카카오톡@그리팅 친구 추가하고 소식과 혜택을 받아보세요.</div>
              <div className="social_media">
                <a
                  href="https://www.instagram.com/greating.official/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UClyxH287Qe5OEWxCPXRRvHg"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://blog.naver.com/h_greating" target="_blank">
                  <i className="fab fa-blogger"></i>
                </a>
                <a
                  href="https://accounts.kakao.com/login?continue=http%3A%2F%2Fpf.kakao.com%2F_xjuhtT%2Fchat%3Fapi_ver%3D1.0%26kakao_agent%3Dsdk%252F1.39.14%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.greating.co.kr%26app_key%3D3ee3b3c91fa6a9e9be6b05253143a90b%26referer%3Dhttps%253A%252F%252Fwww.greating.co.kr%252Fmarket%252FmarketDetail%253FitemId%253D100861"
                  target="_blank"
                >
                  <i className="fas fa-comments"></i>
                </a>
              </div>
            </div>
            <div className="company_info">
              <div className="company_name">현대그린푸드</div>
              <div>
                대표이사: 박홍진 | 사업장소재지: 경기도 용인시 수지구 문인로
                30(동천동) 현대그린푸드
              </div>
              <div>사업자등록번호: 211-81-08241</div>
              <div>통신판매신고번호: 제 2011-용인수지-0268호</div>
              <div>
                개인정보보호책임자: 김해곤 | 개인정보 관리
                이메일:hdgreenfood@hyundaigreenfood.com
              </div>
              <div>호스팅 서비스 사업자: (주)현대그린푸드</div>
              <div>
                Copyright © 2020 HYUNDAI GREEN FOOD. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
