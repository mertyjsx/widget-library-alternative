


import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { Provider } from "react-redux";


import { store } from "./redux/store";
import "./style.css";
function insertAfter(newElement, referenceElement) {
  referenceElement.parentNode.insertBefore(
    newElement,
    referenceElement.nextSibling
  );
}


export const start = (config) => {
console.log(config)

    const domContainer = document.querySelector(config.placeholder);
    const reactRoot = document.createElement("div");

    insertAfter(reactRoot, domContainer);

    ReactDOM.render( <Provider store={store}><App config={config} /></Provider>, reactRoot);
};

let configuration = {
    attributes: ['red', 'blue', 'black'],
    placeholder: '.product-color',
    placeholder_text: 'Surprise me with the color',
    cart_button: '.cart-btn',
    image: window.location.origin + '/images/black.png',
    select_attribute: function(attr) {
      $(".active").removeClass("active");
       $(".left-column img[data-image = " + attr + "]").addClass("active");
       document.querySelector(`input#${attr}`).checked = true;
     }
  }



