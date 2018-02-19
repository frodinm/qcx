import React, { Component } from 'react';
import WebOpenOrdersInfo from '../assets/WebOrderInfo.png'

export class OrderInfo extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="live-mockups">
            <img src={WebOpenOrdersInfo} alt="OrderInfo" className="image" id="android-realTime"/>
          </div>
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Order info</span>
            <span className="feature-text" style={{color:'#777',marginTop:20}}>Access to additional information <br/> and easily cancel your open order</span>
          </div>
        </div>
    );
  }
}
