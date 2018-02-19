import React, { Component } from 'react';
import WebTrading from '../assets/WebLiveTrading.png'

export class Trade extends Component {
  render() {
    return (
       <div className="welcome-section" id="trade-section">
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Live Trading</span>
            <span className="feature-text" style={{color:'#777',marginTop:20}}>Easily trade your <br/> available digital assets</span>
          </div>
          <div className="live-mockups">
            <img src={WebTrading} alt="android-trade" className="image" id="android-realTime"/>
          </div>
        </div>
    );
  }
}
