import React, { Component } from 'react';
import WebPastTransactions from '../assets/WebPastTransactions.png'

export class PastTransactions extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="live-mockups">
            <img src={WebPastTransactions} alt="pastTransactions" className="image" id="android-realTime"/>
          </div>
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Transactions info</span>
            <span className="feature-text" style={{color:'#777',marginTop:20}}>Clear past transaction <br/> additional information</span>
          </div>
        </div>
    );
  }
}
