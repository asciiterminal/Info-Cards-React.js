import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props){//props is just another variable
    //assigning name.
    return  ( <div className="card">
    <div className="top">
    {/* <p>{props.key}</p> */}
    <p>{props.id}</p>
      <h2 className="name">{props.name}</h2>
     <Avatar img={props.img}/>
     {/* We are telling the Avatar tag
     to retrieve the {props.img} where the general data from
     from App is taken from Avatar via {props}
     and sent here for viewing */}
    </div>
    
    <div className="bottom">
    <Detail
    detailInfo={props.tel}
    />
    <Detail
    detailInfo={props.email}
    />
  
    </div>
  </div>
    );
}
// This Card module is now dynamically re-usable
//for more cards to be added to the page.
export default Card;