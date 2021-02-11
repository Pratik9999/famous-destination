import placesTypes from './places.types';

const placesReducer = (state = {}, action) => {
   switch (action.type) {
      case placesTypes.FETCH_COUNTRY_PLACE:
         return {
            ...state,
            ...action.payload 
         }
      default:
         return state;
   }
}

export default placesReducer;