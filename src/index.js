import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware, combineReducers } from 'redux';

//reducers go here

//store goes here
const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(logger)
);
//wrap App in Provider to make store available 
ReactDOM.render(
<React.StrictMode>
<Provider store={storeInstance}>
<App />
</Provider>
</React.StrictMode>    
, document.getElementById('root'));
registerServiceWorker();
