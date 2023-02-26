import React from "react";
import photo from "../images/avatar.jpeg"
import "./ProfilePhoto.css"

function ProfilePhoto(){
  return(
    <div className="photo">
    <img src={photo} alt="avatar"></img>
  </div>
  )
}

export default ProfilePhoto;