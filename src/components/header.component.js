import React, { PureComponent } from 'react';

export class Header extends PureComponent {
  componentDidMount(){
    window.initialSection = document.getElementById('initial-section').getBoundingClientRect().top;
    window.liveSection = document.getElementById('live-section').getBoundingClientRect().top;
    window.questionsSection = document.getElementById('questions').getBoundingClientRect().top;
    window.footer = document.getElementById('footer').getBoundingClientRect().top;
  }

  handleScrollToSection(id){
   if(id.toString() === "initial-section"){
      window.scrollTo({top:window.initialSection,behavior:'smooth'})
   }else if(id.toString() === "live-section"){
    window.scrollTo({top:window.liveSection,behavior:'smooth'})
   }else if(id.toString() === "questions"){
    window.scrollTo({top:window.questionsSection,behavior:'smooth'})
   }else if(id.toString() === "footer"){
    window.scrollTo({top:window.footer,behavior:'smooth'})
   }
  }
  render() {
    return (
        <header className="App-header" id="header">
          <div className="header-title">
            <a onClick={()=>this.handleScrollToSection('initial-section')} className="header-text">Qcx</a>
          </div>
          <div className="header-sections">
            <a onClick={()=>this.handleScrollToSection('live-section')} className="header-text" >Features</a>
            <a onClick={()=>this.handleScrollToSection('questions')} className="header-text">Questions</a>
            <a onClick={()=>this.handleScrollToSection('footer')} className="header-text">Contact</a>
          </div>
        </header>
    );
  }
}
