import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CategoryDropDown.scss';

class CategoryDropDown extends Component {
  state = {
    menuItemList: [],
  };

  componentDidMount = () => {
    fetch('http://10.58.2.110:8000/products/categories')
      .then(response => response.json())
      .then(data => {
        this.setState({ menuItemList: data.RESULT });
      });
  };

  onClickHandler = () => {
    this.props.handleDropDown();
  };

  render() {
    const { isClicked } = this.props;
    const { menuItemList } = this.state;

    return (
      <div className="category_dropdown">
        <ul
          onClick={this.onClickHandler}
          className={isClicked ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {menuItemList &&
            menuItemList.map((item, idx) => {
              return (
                <li key={idx}>
                  <div className="title">{item.menu}</div>
                  {item.category.map((category, idx) => {
                    return (
                      <Link className="items" key={idx}>
                        {category}
                      </Link>
                    );
                  })}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default CategoryDropDown;
