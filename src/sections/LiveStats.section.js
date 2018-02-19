import React, { Component } from 'react';
import LiveStatsImage from '../assets/WebLiveData.png'

export class LiveStats extends Component {
  render() {
    return (
       <div className="welcome-section" id="live-section">
          <div className="live-mockups">
            <img src={LiveStatsImage} alt="stats" className="image" id="android-realTime"/>
          </div>
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Live updates</span>
            <span className="feature-text" style={{color:'#777',marginTop:20}}>Realtime prices for every supported <br/> QuadrigaCX digital asset</span>
          </div>
        </div>
    );
  }
}
