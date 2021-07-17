import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware, createStore, combineReducers } from 'redux';

//reducers go here

//reducer for list of feedback history
const feedbackList = (state = [], action) => {
    if (action.type === "FEEDBACK_INFO"){
        console.log(action.payload);
        return action.payload;
    }
    return state;
};

//reducer for current feedback session
const feelingInfo = (state = [], action) => {
    if (action.type === 'FEELINGS_INFO'){
        return action.payload;
    }
    return state;
};
//store goes here
const storeInstance = createStore(
    combineReducers({
feedbackList,
feelingInfo
    }),
    applyMiddleware(logger)
);
//wrap App in Provider to make store available to entire App
ReactDOM.render(
<React.StrictMode>
<Provider store={storeInstance}>
<App />
</Provider>
</React.StrictMode>    
, document.getElementById('root'));
registerServiceWorker();
