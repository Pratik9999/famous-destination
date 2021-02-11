import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import placesReducer from './places/places.reducer';
import placeReducer from './place/place.reducer';
import errorReducer from './error/error.reducer';

const middlewares = [logger, thunk]; 

const rootReducers = combineReducers({
   places: placesReducer,
   place: placeReducer,
   error: errorReducer
});

const store = createStore(rootReducers, applyMiddleware(...middlewares))

export default store; 