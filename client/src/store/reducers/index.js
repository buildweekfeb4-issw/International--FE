// import { combineReducers } from 'redux';

// import loginReducer from './loginReducer';
// import childReducer from './childReducer';

// export default combineReducers({
//   loginReducer,
//   childReducer
// });

import { combineReducers } from 'redux';

import registration from "./registration";
import loginReducer from './loginReducer';
import childReducer from './childReducer';

export default combineReducers({
  registration,
  loginReducer,
  childReducer
});
