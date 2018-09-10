import {ADD_TO_CART} from '../actions/actionTypes'
const initialState = {
    count: 0
  };
export default function reducer(state = initialState, action) {
    switch(action.type) {
      case ADD_TO_CART:
        return {
          count: state.count + 1
        };
      default:
        return state;
    }
  }