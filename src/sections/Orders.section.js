import React, { Component } from 'react';
import WebOpenOrders from '../assets/WebOpenOrders.png'

export class Orders extends Component {
  render() {
    return (
       <div className="welcome-section">
          <div className="feature">
            <span style={{fontSize:35,color:'black'}}>Open Orders</span>
            <span className="feature-text" style={{fcolor:'#777',marginTop:20}}>Easy see your active <br/> open orders with imporant information</span>
          </div>
          <div className="live-mockups">
            <img src={WebOpenOrders} alt="open-orders" className="image" id="android-realTime"/>
          </div>
        </div>
    );
  }
}
