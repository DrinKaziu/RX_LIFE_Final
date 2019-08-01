import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo2 from '../img/logo2.png';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserTimes } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="header">
        <div className="header-content">
          <NavLink to='/' className="header-content-logo">
            <span>The</span>
            <img src={logo2} alt="rx-life-logo"/>
            <span>Life</span>
          </NavLink>
          <div className="header-content-links">
            <HashLink to='/#challenge-section'>The Challenge</HashLink>
            <NavLink to='/points'>The Points</NavLink>
            <a href="/points#how-it-works-section">How to Play</a>
          </div>
          <div className="header-content-auth">
            {auth ?
              <a href='/api/logout'>
                <FontAwesomeIcon icon={faUserTimes} />
                <h4>hi, {auth.firstName}</h4>
              </a> 
              :
              <a href='/auth/google'>
                <FontAwesomeIcon icon={faUserPlus} />
              </a>
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Navbar);