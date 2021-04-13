import React, { Component } from 'react';
import AdBanner from './AdBanner/AdBanner';
import './AdBanner/AdBanner.scss';

class Main extends Component {
  render() {
    return (
      <div>
        hello main
        <AdBanner />;
      </div>
    );
  }
}

export default Main;
