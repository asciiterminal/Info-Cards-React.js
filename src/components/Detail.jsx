import React from "react";

function Detail(props){
    return  <p className="info">{props.detailInfo}</p>
    //We found out that we need to use {detailInfo}
    //by using dev tools,It is like a rear-view mirror
    //for developers.
}

export default Detail;