import React from 'react';
import appScreenshot from '../img/app-screenshot.png';
import runningGroup from '../img/running-group.png';
import prizes from '../img/prizes.png';
import apple from '../img/apple-store.png';
import google from '../img/google-play.png';

function PointsContent() {
  return (
    <div className="Points-Content">
      <div className="content">
        <div className="how-it-works" id="how-it-works-section">
          <div className="points-title">
            <h1>How It Works</h1>
            <h3>Seven Steps. Seven Weeks. Ready, Set, Go.</h3>
          </div>
          <div className="how-it-works-content">
            <h4>Download The App.</h4>
            <div className="app-download">
              <a href="#apple"><img src={apple} alt="apple-store" className="apple-store"/></a>
              <a href="#google"><img src={google} alt="google-store" className="google-store"/></a>
            </div>
            <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
            <img src={appScreenshot} alt="app-screenshot" className="app-screenshot"/>
            <h4>Set Up Account</h4>
            <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
            <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
          </div>
        </div>
        <div className="keeping-track">
          <div className="points-title">
            <h1>Keeping Track</h1>
            <h3>Seven Steps. Seven Weeks. Ready, Set, Go.</h3>
          </div>
          <div className="keeping-track-content">
            <h4>Download The App.</h4>
            <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
            <img src={runningGroup} alt="running-group" className="running-group"/>
            <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
          </div>
        </div>
        <div className="rewards">
          <div className="points-title">
            <h1>Rewards</h1>
            <h3>OMG! Prizes. Yay!</h3>
          </div>
          <div className="prizes">
            <h4>Winner Winner Chicken Dinner!!</h4>
            <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
            <img src={prizes} alt="prizes" className="prizes-img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PointsContent;