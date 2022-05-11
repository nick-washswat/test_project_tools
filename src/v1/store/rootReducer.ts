import {combineReducers} from 'redux';

// slices
import {cardSlice, screensSlice} from './slices';

const rootReducer = combineReducers({
  card: cardSlice,
  screens: screensSlice,
});

export default rootReducer;
