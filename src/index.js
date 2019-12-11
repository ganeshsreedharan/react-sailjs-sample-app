import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/components/AppContainer/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import reducer from './app/redux/reducer'
import rootSaga from './app/redux/sagas';


// Redux Middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
);

// run the sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
  <App /></Provider>,
  document.getElementById('root')
);
registerServiceWorker();
