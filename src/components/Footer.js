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
        <FontAwesomeIcon icon={faTwitter} className="footer-icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faFacebook} className="footer-icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className="footer-icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className="footer-icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin} className="footer-icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub} className="footer-icon"></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Footer;