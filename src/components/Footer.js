import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"

function Footer(){
  return(
    <div className="footer">
      <div className="icons">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lawyermstf">
        <FontAwesomeIcon icon={faTwitter} className="footer-icon"></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/musenscek">
        <FontAwesomeIcon icon={faFacebook} className="footer-icon"></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lawyermstf/">
        <FontAwesomeIcon icon={faInstagram} className="footer-icon"></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mustafaensarcekic/">
        <FontAwesomeIcon icon={faLinkedin} className="footer-icon"></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mustafaensar">
        <FontAwesomeIcon icon={faGithub} className="footer-icon"></FontAwesomeIcon>
        </a>
      </div>
    </div>
  )
}

export default Footer;