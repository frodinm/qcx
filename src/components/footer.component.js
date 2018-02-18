import React, { PureComponent } from 'react';
import appStore from '../assets/ios/appstore.svg'
import playStore from '../assets/android/googleplay.svg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/GitHub.png'
import gmail from '../assets/gmail.png'

export class Footer extends PureComponent {
  render() {
    return (
        <div className="App-footer" id="footer">
          <div className="footer-sections" id="footer-links">
            <span style={{fontSize:20}}>Download the app</span>
            <div style={{display:'flex',flexDirection:'row'}}>
                <img onClick={()=>alert('Will be available soon')} style={{margin:20,marginRight:5,cursor:'pointer'}}  alt="app store logo" src={appStore}/>
                <img onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.qcx&hl=en')} style={{margin:20,marginLeft:5,cursor:'pointer'}} alt="playstore logo" src={playStore}/>
            </div>
          </div>
          <div className="footer-sections" id="footer-contact">
              <span style={{fontSize:20,margin:10}}>Contact</span>
              <div style={{display:'flex',flexDirection:'row',}}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/fabrizio-rodin-miron"><img alt="linkedinLogo" style={{height:40,width:40,margin:20}} src={linkedin}/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/frodinm"><img alt="githubLogo" style={{height:40,width:40,borderRadius:100,margin:20}} src={github}/></a>
                <a href="mailto:frodinmdev@gmail.com"><img alt="gamilLogo" style={{height:40,width:40,margin:20}} src={gmail}/></a>
              </div>
          </div>
        </div>
    );
  }
}
