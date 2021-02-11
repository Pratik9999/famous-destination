import axios from 'axios';
import famousDestinationApi from '../../axios/famous-destination-api';

export const getCountriesPlacesByName = async (countryName) => {

   const { data } = await famousDestinationApi.get(`/places/country/${countryName}`);

   return { [countryName] : data };
}  

