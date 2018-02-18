import React, { Component } from 'react';
import Iphone from '../assets/ios/PastTransactions.png'
import Android from '../assets/android/TransactionInfo.png'

export class PastTransactions extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Transactions info</span>
            <span style={{fontSize:25,color:'#777',marginTop:20}}>Clear past transaction <br/> additional information</span>
          </div>
          <div className="live-mockups">
            <img src={Android} alt="android-trade" className="live-stats" id="android-realTime"/>
            <img src={Iphone} alt="ios-trade" className="live-stats" id="ios-realTime"/>
          </div>
        </div>
    );
  }
}
