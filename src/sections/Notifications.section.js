import React, { Component } from 'react';
import WebNotification from '../assets/WebNotification.png'


export class Notifications extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="live-mockups">
            <img src={WebNotification} alt="Notification" className="image" id="android-realTime"/>
          </div>
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Notifications</span>
            <span className="feature-text" style={{color:'#777',marginTop:20}}>Clear error notifications while trading</span>
          </div>
        </div>
    );
  }
}
