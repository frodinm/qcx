import React, { Component } from 'react';
import Iphone from '../assets/ios/OrdersInfo.png'
import Android from '../assets/android/OrdersInfo.png'

export class OrderInfo extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="live-mockups">
            <img src={Android} alt="android-trade" className="live-stats" id="android-realTime"/>
            <img src={Iphone} alt="ios-trade" className="live-stats" id="ios-realTime"/>
          </div>
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Order info</span>
            <span style={{fontSize:25,color:'#777',marginTop:20}}>Access to additional information <br/> and easily cancel your open order</span>
          </div>
        </div>
    );
  }
}
