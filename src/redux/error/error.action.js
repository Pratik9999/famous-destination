
import errorTypes from './error.types';

export const searchError = (value) => ({
   type: errorTypes.SEARCH_ERROR,
   payload: value
});