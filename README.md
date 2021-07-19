# Project Name 
Prime Feedback Form

## Description

This is a feedback form that allows users to enter numeric responses to how they are feeling, their level of understanding, how supported they feel, and also leave a text comment. 

The response values are then dispatched to a database to be stored upon final submission. The user then has the option to go back to a new form which clears the values for a fresh start. 

## PROJECT INSTALLATIONS

In order to run this application you need to do some installations:
npm install
npm run server
npm run client
npm install redux react-redux
npm install redux-logger
npm install react-router-dom
npm install @material-ui-core

The application consists of an input on each page that is dispatched to a reducer in the store. Each value has it's own reducer. Once you get to the review page, the values are selected using useSelector from the store and displayed for the user. The user can then submit the feedback and those values are sent to the database via an axios POST. A history of the feedback is available via an axios GET request. Future iterations may involve that data being displayed for admin or user. 

This application was made using REACT, REDUX, SQL, and incorporated some Material UI styling. 

