import React, { Component } from 'react'
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/Index';
import VenueNfo from './components/venueNfo/Index';
import Hightlight from './components/highlights/Index';

export default class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height: "1500px", 
        background: 'cornflowerblue'
      }}>
        <Header />
        <Featured />
        <VenueNfo />
        <Hightlight />
      </div>
    )
  }
}