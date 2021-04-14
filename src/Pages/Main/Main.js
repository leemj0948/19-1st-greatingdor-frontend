import React, { Component } from 'react';
import AdBanner from './AdBanner/AdBanner';
import './AdBanner/AdBanner.scss';
import Filter from './Filter/Filter';

class Main extends Component {
  render() {
    return (
      <div>
        hello main
        <AdBanner />
        <Filter />
      </div>
    );
  }
}

export default Main;
