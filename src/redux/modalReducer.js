import types from "./types"

export const openModalAction = () => ({
  type: types.OPEN_MODAL,
  payload: true,
});
export const closeModalAction = () => ({
  type: types.CLOSE_MODAL,
  payload: false,
});
/**  utils*/





/* ınıtal_state */

const INITIAL_STATE = {
 modalStatus:false
};

/* reducers */
const modalReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        modalStatus:action.payload
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modalStatus:action.payload
      };
    
    default:
      return state;
  }
};

export default modalReducer;
