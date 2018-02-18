import React, { Component } from 'react';
import Iphone from '../assets/ios/Trade.png'
import Android from '../assets/android/Trade.png'

export class Trade extends Component {
  render() {
    return (
       <div className="welcome-section" id="trade-section">
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Live Trading</span>
            <span style={{fontSize:25,color:'#777',marginTop:20}}>Easily trade your <br/> available digital assets</span>
          </div>
          <div className="live-mockups">
            <img src={Android} alt="android-trade" className="live-stats" id="android-realTime"/>
            <img src={Iphone} alt="ios-trade" className="live-stats" id="ios-realTime"/>
          </div>
        </div>
    );
  }
}
