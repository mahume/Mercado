import React, { Component } from 'react';
import Header from '../Header/index';
import Order from '../Order/index';
import StorePicker from '../StorePicker/index';

class App extends Component {
  render() {
    return (
      <>
        <Header tagline="Fresh Seafood Market" />
        <Order />
        <StorePicker />
      </>
    );
  }
}

export default App;
