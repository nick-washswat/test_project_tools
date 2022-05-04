import {combineReducers} from 'redux';

// slices
import {cardSlice} from './slices';

const rootReducer = combineReducers({
  card: cardSlice,
});

export default rootReducer;
