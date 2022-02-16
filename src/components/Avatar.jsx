import React from "react";

function Avatar(props){
    return  <img
    className="circle-img"
      src={props.img}
      alt="avatar_img"
    />
//This is a function for the Images
}

export default Avatar;

//To access the resources we pass the info 
//from App ---> Card ---> Avatar
//In some situation like in the contact.jsx the Image
//is defined as imgURL lets say you changed the 
//code to {props.imgURL} and it wont work so you
//can install an extension called React Dev Tools
//on chrome or vscode which will show you that in which
//hierarchy tree which component is being using which in terms
//if we check in the dev tools will show {props.img}
//from where you can understand that which object approach
//is being taken and how to fix it.