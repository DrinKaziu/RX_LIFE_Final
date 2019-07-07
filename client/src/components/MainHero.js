import React from 'react';
import logo2 from '../img/logo2.png';
import apple from '../img/apple-store.png';
import google from '../img/google-play.png';
import Button from '@material-ui/core/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function MainHero() {
  return (
    <Carousel className="hero">
      <Carousel.Item className="hero-one">
        <div className="hero-one-content">
          <div className="hero-one-content-textbox">
            <h1 className="hero-one-content-textbox-heading-primary" style={{fontFamily: 'Ubuntu'}}>
              <span className="hero-one-content-textbox-heading-primary-main">Take The</span>
              <span className="hero-one-content-textbox-heading-primary-main">RX Life</span>
              <span className="hero-one-content-textbox-heading-primary-main">Challenge</span>
              <span className="hero-one-content-textbox-heading-primary-sub">Modify your life, change your body.</span>
            </h1>
            <Link to='/signup'>
              <Button variant="outlined" className="hero-one-content-button">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="hero-two">
        <div className="hero-two-content">
          <div className="hero-two-content-textbox">
            <h1 className="hero-two-content-textbox-heading-primary" style={{fontFamily: 'Ubuntu'}}>
              <span className="hero-two-content-textbox-heading-primary-main">What Are</span>
              <span className="hero-two-content-textbox-heading-primary-main">You Eating</span>
              <span className="hero-two-content-textbox-heading-primary-main">Today?</span>
              <span className="hero-two-content-textbox-heading-primary-sub">Visit the Blog for Ideas!</span>
            </h1>
            <Link to='/signup'>
              <Button variant="outlined" className="hero-two-content-button">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="hero-three">
        <div className="hero-three-content">
          <div className="hero-three-content-textbox">
            <div className="hero-three-content-textbox-logo">
              <img src={logo2} alt="rx-life-logo"/>
            </div>
            <h1 className="hero-three-content-textbox-heading-primary" style={{fontFamily: 'Ubuntu'}}>
              <span className="hero-three-content-textbox-heading-primary-main">Our New</span>
              <span className="hero-three-content-textbox-heading-primary-main">Platform</span>
              <span className="hero-three-content-textbox-heading-primary-sub">Modify your life, change your body.</span>
              <span>
                <a href="#apple"><img src={apple} alt="apple-store" className="apple-store"/></a>
                <a href="#google"><img src={google} alt="google-store" className="google-store"/></a>
              </span>
            </h1>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default MainHero; 
