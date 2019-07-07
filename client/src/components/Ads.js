import React from 'react';
import logo2 from '../img/logo2.png';
import apparel from '../img/apparel.png';
import apple from '../img/apple-store.png';
import google from '../img/google-play.png';
import newsletter from '../img/newsletter.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Ads() {
  return (
    <section className="ads">
      <div className="ads-content">
        <div className="apparel">
            <div className="ad-box ad-box-1">
              <img src={newsletter} alt="newsletter"/>
              <p>Sign up for the RX Life weekly newsletter</p>
              <Link to='/signup'>
                <Button variant="outlined" className="ad-box-button">
                  Sign Up
                </Button>
              </Link>
            </div>
            <div className="ad-box ad-box-2">
              <img src={apparel} alt="apparel"/>
              <p>Back to school? Stay cool in RX Life apparel</p>
              <Button variant="outlined" className="ad-box-button">
                Visit Store
              </Button>
            </div>
            <div className="ad-box ad-box-3">
              <img src={apparel} alt="apparel"/>
              <p>Back to school? Stay cool in RX Life apparel</p>
              <Button variant="outlined" className="ad-box-button">
                Visit Store
              </Button>
            </div>
        </div>
        <div className="app-download">
          <div className="app-download-logo">
            <img src={logo2} alt="rx-life-logo"/>
          </div>
          <p>Download the app on iOS or Android</p>
          <span>
            <a href="#apple"><img src={apple} alt="apple-store" className="apple-store"/></a>
            <a href="#google"><img src={google} alt="google-store" className="google-store"/></a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Ads;