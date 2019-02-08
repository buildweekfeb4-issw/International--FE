// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducers/index";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// export default createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(logger, thunk)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [logger, thunk];
const reduxDevToolsEnabler =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  reduxDevToolsEnabler
    ? compose(
        applyMiddleware(...middleware),
        reduxDevToolsEnabler
      )
    : applyMiddleware(...middleware)
);
