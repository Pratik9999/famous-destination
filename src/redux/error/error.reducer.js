
import errorTypes from './error.types';

const INITIAL_VALUE = {
   searchError: false
}

const errorReducer = (state= INITIAL_VALUE, action) => {
   switch (action.type) {
      case errorTypes.SEARCH_ERROR:
         return {
            ...state,
            searchError: action.payload
         }
      default:
         return state;
   }
}

export default errorReducer;