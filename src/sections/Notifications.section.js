import React, { Component } from 'react';
import Iphone from '../assets/ios/Notifications.png'
import Android from '../assets/android/Notifications.png'

export class Notifications extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="live-mockups">
            <img src={Android} alt="android-trade" className="live-stats" id="android-realTime"/>
            <img src={Iphone} alt="ios-trade" className="live-stats" id="ios-realTime"/>
          </div>
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Notifications</span>
            <span style={{fontSize:25,color:'#777',marginTop:20}}>Clear error notifications while trading</span>
          </div>
        </div>
    );
  }
}
