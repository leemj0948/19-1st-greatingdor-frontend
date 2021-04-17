import React, { Component } from 'react';
import DropDown from './DropDown/DropDown';
import './ReviewTab.scss';

class ReviewTab extends Component {
  state = {
    reviewId: 0,
    reviewData: [],
  };

  componentDidMount = () => {
    fetch('/data/reviewTab.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ reviewData: data });
      });
  };

  handleDropdown = id => {
    if (this.state.reviewId === id) {
      this.setState({ reviewId: 0 });
    } else {
      this.setState({ reviewId: id });
    }
  };

  render() {
    const { reviewData, reviewId } = this.state;
    return (
      <>
        <div className="review_header">
          <span className="total"> 전체(130)</span>
          <span className="warning">
            일부 효능/효과 관련 후기는 구매자의 주관적인 소견이며 개인별로
            상이할 수 있습니다.
          </span>
        </div>
        <ul className="review_container">
          {reviewData.map((review, idx) => {
            return (
              <li key={idx}>
                <div className="review_contents">
                  <div className="contents">
                    <div className="title_container">
                      <span className="title">{review.title}</span>
                      <span
                        className="icon"
                        onClick={() => this.handleDropdown(idx + 1)}
                      >
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <span className="user_id">{review.userId}</span>
                    <span className="date">{review.date}</span>
                  </div>
                  {reviewId === idx + 1 && <DropDown item={review} />}
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ReviewTab;
