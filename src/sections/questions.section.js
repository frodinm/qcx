import React, { Component } from 'react';

export class Questions extends Component {
  render() {
    return (
        <div className="welcome-section" id="questions">
            <div id="questions-left">
                <div className="question-wrapper">
                    <span className="Question">Why build a QuadrigaCX app?</span>
                    <span className="Answer">I initially decided to build this app throught a reddit post where people wanted QuadrigaCX to have a mobile application.Given the opportunity, I built this app with React-Native in order to support Android and Ios.</span>
                </div>
                <div className="question-wrapper">
                    <span className="Question">Is my information secure?</span>
                    <span className="Answer">Yes, your client id, api key and api secret are securely stored on your phone. All the data is encrypted on your phone for extra security. Any calls to request data from the QuadrigaCX servers follow their encryption standards as well. I do not and never will gather my user's private data to access their accounts.</span>
                </div>
            </div>
            <div id="questions-right">
                <div className="question-wrapper">
                    <span className="Question">Can I request a new feature?</span>
                    <span className="Answer">Yes! I would be glad to be able to add new features! I am currently a student at Concordia University so my time is limited, but ill be happy to work on them on my free time! Please visit this link : <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/TgiSz3">https://goo.gl/TgiSz3</a></span>
                </div>
                <div className="question-wrapper">
                    <span className="Question">I have another question in mind!</span>
                    <span className="Answer">Please contact me at <a href="mailto:frodinmdev@gmail.com">frodinmdev@gmail.com</a> if you have any other questions. I would be glad to answer all of them.</span>
                </div>
            </div>
        </div>
    );
  }
}
