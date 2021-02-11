import axios from 'axios';

const famousDestinationApi = axios.create({
   baseURL: 'https://famous-destination.herokuapp.com/famousdestination/api'
});

export default famousDestinationApi;