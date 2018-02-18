import React, { Component } from 'react';
import Iphone from '../assets/ios/OpenOrders.png'
import Android from '../assets/android/OpenOrders.png'

export class Orders extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Open Orders</span>
            <span style={{fontSize:25,color:'#777',marginTop:20}}>Easy see your active <br/> open orders with imporant information</span>
          </div>
          <div className="live-mockups">
            <img src={Android} alt="android-trade" className="live-stats" id="android-realTime"/>
            <img src={Iphone} alt="ios-trade" className="live-stats" id="ios-realTime"/>
          </div>
        </div>
    );
  }
}
