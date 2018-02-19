import React, { Component } from 'react';
import {Header,Divider,Footer,HeaderFill} from './components';
import {LiveStats,Trade,Notifications,OrderInfo,Orders,PastTransactions,Wallet,Reason,Initial,Questions} from './sections'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HeaderFill/>
        <Initial/>
        <Divider/>
        <Reason/>
        <Divider/>
        <LiveStats/>
        <Divider/>
        <Trade/>
        <Divider/>
        <Notifications/>
        <Divider/>
        <Orders/>
        <Divider/>
        <OrderInfo/>
        <Divider/>
        <Wallet/>
        <Divider/>
        <PastTransactions/>
        <Divider/>
        <Questions/>
        <Footer/>
      </div>
    );
  }
}

export default App;
