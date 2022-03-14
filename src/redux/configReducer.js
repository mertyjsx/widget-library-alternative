import types from "./types"
  
  export const setConfigAction = (payload) => ({
    type: types.SET_CONFIG,
    payload: payload,
  });
 
  /**  utils*/
  
  
  
  
  
  /* ınıtal_state */
  
  const INITIAL_STATE = {
   config:{
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
  };
  
  /* reducers */
  const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.SET_CONFIG:
        return {
          ...state,
          config:action.payload
        };
     
      default:
        return state;
    }
  };
  
  export default modalReducer;
  