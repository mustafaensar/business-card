import React from "react";
import "./Header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Header(){
  return(
    <div className="header">
      <h2>Mustafa Ensar Cekic</h2>
      <h4>Blockchain Developer</h4>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mustafaensarcekic/">
      <button><FontAwesomeIcon icon={faLinkedin} className="button-icon"></FontAwesomeIcon> LinkedIn</button>  
      </a>
    </div>
  )
}

export default Header;