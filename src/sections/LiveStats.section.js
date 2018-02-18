import React, { Component } from 'react';
import IphoneLiveStats from '../assets/ios/LiveStats.png'
import AndroidLiveStats from '../assets/android/LiveStats.png'

export class LiveStats extends Component {
  render() {
    return (
       <div className="welcome-section" id="live-section">
          <div className="live-mockups">
            <img src={AndroidLiveStats} alt="android-stats" className="live-stats" id="android-realTime"/>
            <img src={IphoneLiveStats} alt="ios-stats" className="live-stats" id="ios-realTime"/>
          </div>
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Live updates</span>
            <span style={{fontSize:25,color:'#777',marginTop:20}}>Realtime prices for every supported <br/> QuadrigaCX digital asset</span>
          </div>
        </div>
    );
  }
}
