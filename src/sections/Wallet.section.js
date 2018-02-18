import React, { Component } from 'react';
import Iphone from '../assets/ios/IosWallet.png'
import Android from '../assets/android/Wallet.png'

export class Wallet extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Wallet</span>
            <span style={{fontSize:25,color:'#777',marginTop:20}}>Clean wallet design <br/> with access past transaction</span>
          </div>
          <div className="live-mockups">
            <img src={Android} alt="android-trade" className="live-stats" id="android-realTime"/>
            <img src={Iphone} alt="ios-trade" className="live-stats" id="ios-realTime"/>
          </div>
        </div>
    );
  }
}
