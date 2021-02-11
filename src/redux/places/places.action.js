
import { getCountriesPlacesByName } from './places.utils';
import placesTypes from './places.types';


export const fetchCountryPlace = (countryName) => async (dispatch) => {
   
   const fetchedPlaces =  await getCountriesPlacesByName(countryName);

   dispatch({ type: placesTypes.FETCH_COUNTRY_PLACE, payload: fetchedPlaces });

}

export const fetchCountriesPlaces = () => async (dispatch) => {

   await dispatch(fetchCountryPlace('brazil')); 
   await dispatch(fetchCountryPlace('america'));
   await dispatch(fetchCountryPlace('australia'));
   await dispatch(fetchCountryPlace('vietnam')); 

}
 
