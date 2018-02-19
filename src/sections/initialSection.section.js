import React, { Component } from 'react';
import logo from '../assets/icon.png'
import appStore from '../assets/ios/appstore.svg'
import playStore from '../assets/android/googleplay.svg'
import LiveStats from '../assets/WebLiveData.png'

export class Initial extends Component {
  render() {
    return (
        <div className="welcome-section" id="initial-section">
         <div className="initial-wrapper">
            <img alt="logo" id="logo" src={logo} style={{margin:10}}/>
            <div style={{display:'flex',flexDirection:'column'}}>
                <span style={{fontSize:35,color:'black',margin:5}}>Qcx</span>
                <span style={{fontSize:20,color:'#777',margin:5}}>Your QuadrigaCX app</span>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <img onClick={()=>alert('Will be available soon')} style={{margin:20,marginRight:5,cursor:'pointer'}}  alt="app store logo" src={appStore}/>
                <img onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.qcx&hl=en')} style={{margin:20,marginLeft:5,cursor:'pointer'}} alt="playstore logo" src={playStore}/>
            </div>
        </div>
         <div className="live-mockups">
            <img src={LiveStats} alt="android-stats" className="image" id="android-realTime"/>
         </div>
      </div>
    );
  }
}
