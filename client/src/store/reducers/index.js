// import { combineReducers } from 'redux';

// import loginReducer from './loginReducer';
// import childReducer from './childReducer';

// export default combineReducers({
//   loginReducer,
//   childReducer
// });

import { combineReducers } from 'redux';

import registrationReducer from "./registrationReducer";
import loginReducer from './loginReducer';
import childReducer from './childReducer.js';

export default combineReducers({
  registrationReducer,
  loginReducer,
  childReducer
});


