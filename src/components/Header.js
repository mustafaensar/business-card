import React from "react";
import "./Header.css"

function Header(){
  return(
    <div className="header">
      <h2>Mustafa Ensar Cekic</h2>
      <h4>Blockchain Developer</h4>
      <a href="https://github.com/mustafaensar" className="header-link">mustafaensar.website</a>
      <button><i className="fa button-icon">&#xf0e0;</i> Email</button>
    </div>
  )
}

export default Header;