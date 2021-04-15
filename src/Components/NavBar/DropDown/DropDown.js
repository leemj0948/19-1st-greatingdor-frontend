import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.scss';

class DropDown extends Component {
  state = {
    click: false,
    menuItemList: [],
  };

  handleClick = () => {
    this.setState({
      click: !this.state.click,
    });
  };

  componentDidMount = () => {
    fetch('/data/MenuItems.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ menuItemList: data });
      });
  };
  render() {
    const { click, menuItemList } = this.state;
    return (
      <ul
        onClick={this.handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menuItemList.map((item, idx) => {
          return (
            <li key={idx}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default DropDown;
