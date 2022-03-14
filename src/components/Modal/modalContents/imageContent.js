import React from "react";
import {useSelector} from "react-redux"
export default function ImageContent({setPage}) {
    const imageSource = useSelector((state) => state.configReducer.config.image||"")

  return (
    <div className="centerColumn">
      <img className="imageStyle" src={imageSource} alt="image Content "/>
      <div className="orangeButton" onClick={()=>setPage(state=>state+1)}>Suprize me !</div>
    </div>
  );
}
