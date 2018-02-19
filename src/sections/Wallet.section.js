import React, { Component } from 'react';
import WebWallet from '../assets/WebWallet.png'

export class Wallet extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Wallet</span>
            <span className="feature-text" style={{color:'#777',marginTop:20}}>Clean wallet design <br/> with access past transaction</span>
          </div>
          <div className="live-mockups">
            <img src={WebWallet} alt="WebWallet" className="image" id="android-realTime"/>
          </div>
        </div>
    );
  }
}
