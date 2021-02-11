
import famousDestinationApi from '../../axios/famous-destination-api';
import placeType from './place.types';

export const fetchPlace = (id) => async (dispatch) => {

   const { data } = await famousDestinationApi.get(`/places/${id}`);

   await dispatch({ type: placeType.FETCH_PLACE, payload: data });

}