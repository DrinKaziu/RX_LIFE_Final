import React from 'react';
import { Icon } from 'semantic-ui-react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-social-media">
          <a href="https://www.facebook.com/THERXLIFE/"><Icon name='facebook official'/></a>
          <a href="https://www.instagram.com/rxlifechallenge/"><Icon name='instagram'/></a>
          <a href="https://twitter.com/rxlifechallenge"><Icon name='twitter'/></a>
          <a href="#home"><Icon name='pinterest'/></a>
          <a href="#home"><Icon name='youtube'/></a>
          <a href="#home"><Icon name='mail'/></a>
        </div>
        <div className="footer-1">
          <ul>
            <li><a href="#home">The Rx Lifestyle</a></li>
            <li><a href="#home">The Challenge</a></li>
            <li><a href="#home">The Points</a></li>
          </ul>
        </div>
        <div className="footer-2">
          <ul>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Contact Us</a></li>
            <li><a href="#home">FAQ</a></li>
            <li><a href="#home">Help</a></li>
          </ul>
        </div>
        <div className="footer-3">
          <ul>
            <li><a href="https://www.facebook.com/THERXLIFE/">Facebook</a></li>
            <li><a href="https://www.instagram.com/rxlifechallenge/">Instagram</a></li>
            <li><a href="https://twitter.com/rxlifechallenge">Twitter</a></li>
            <li><a href="#home">YouTube</a></li>
            <li><a href="#home">Pinterest</a></li>
          </ul>
        </div>
        <div className="footer-4">
          <ul>
            <li><a href="#home">App</a></li>
            <li><a href="#home">Downloads</a></li>
            <li><a href="#home">iOS</a></li>
            <li><a href="#home">Android</a></li>
          </ul>
        </div>
        <div className="footer-5">
          <ul>
            <li><a href="#home">The Rx Lifestyle</a></li>
            <li><a href="#home">The Challenge</a></li>
            <li><a href="#home">The Points</a></li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>Copyright &copy; {year} Pokk Fitness. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer; 