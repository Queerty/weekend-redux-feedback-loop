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
    else if (action.type === 'RESET_FEELINGS'){
        return action.payload
    }
    return state;
};

//reducer for understanding
const understandingInfo = (state = [], action) => {
    if (action.type === 'UNDERSTANDING_INFO'){
        return action.payload;
    } else if (action.type === 'RESET_UNDERSTANDING'){
        return action.payload
    }
    return state;
};

//reducer for support
const supportInfo = (state = [], action) => {
    if (action.type === 'SUPPORT_INFO'){
        return action.payload;
    } else if (action.type === 'RESET_SUPPORT'){
        return action.payload
    }
    return state;
};
//reducer for comment section
const commentInfo = (state = [], action) => {
    if (action.type === 'COMMENT_INFO'){
        return action.payload;
    } else if (action.type === 'RESET_COMMENTS'){
        return action.payload
    }
    return state;
};

//store goes here
const storeInstance = createStore(
    combineReducers({
feedbackList,
feelingInfo,
understandingInfo,
supportInfo,
commentInfo

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
