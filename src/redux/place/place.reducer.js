
import placeType from './place.types';

const placeReducer = (state = {}, action) => { 
   switch (action.type) {
      case placeType.FETCH_PLACE:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state;
   }
}

export default placeReducer; 