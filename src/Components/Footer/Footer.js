import React from 'react'
import './Footer.css'
import facebookIcon from '../../icons/facebook.svg';
import githubIcon from '../../icons/github.svg';
import instagramIcon from '../../icons/instagram.svg';
import linkedinIcon from '../../icons/linkedin.svg';
import xIcon from '../../icons/x.svg';
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-info">
              <h4>Designed by <a href="saeed-wx-pk.github.io/saeed-pk">Saeed Pk</a></h4>
              <p>2024 &copy; All rights reserved.</p>
              <p>Sorce Code is available on <a href="https://github.com/saeed-wx-pk/Netflix-project">Github</a></p>
            </div>
            <div className="footer-social">
              <h4>Follow me on social media:</h4>
              <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61559616818067" className="fa">
                      <img src={facebookIcon} alt="icon" /> 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/saeed-wx-pk" className="fa">
                     <img src={githubIcon} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/saeed-pk" className="fa"> 
                      <img src={linkedinIcon} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.x.com/saeed_pk_" className="fa">
                      <img src={xIcon} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/saeed_wx_pk/?utm_source=qr&r=nametag" className="fa">
                      <img src={instagramIcon} alt="icon" />
                    </a>
                  </li>
              </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer