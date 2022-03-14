import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {closeModalAction} from "../../../redux/modalReducer"

export default function attributeContent({ setPage, page }) {
  const [attr, setAttr] = useState("");

  const dispatch = useDispatch();

  const widgetAttributes = useSelector(
    (state) => state.configReducer.config.attributes || []
  );
  const widgetSelectAttributesFunction = useSelector(
    (state) => state.configReducer.config.select_attribute
  );

  useEffect(() => {
    var randomAttr =
      widgetAttributes[Math.floor(Math.random() * widgetAttributes.length)];
    setAttr(randomAttr);
  }, []);

  const attributeHandler = () => {
    widgetSelectAttributesFunction(attr);
    dispatch(closeModalAction());
    setPage(0);
  };

  return (
    <div className="centerColumn">
      {widgetAttributes.map((item) =>
        attr === item ? (
          <div className="selectedAttribute" style={{backgroundColor:item}}>{attr}</div>
        ) : (
          <div onClick={() => setAttr(item)} className="borderButton">{item}</div>
        )
      )}
      <div className="orangeButton" onClick={attributeHandler}>Select me</div>
    </div>
  );
}
