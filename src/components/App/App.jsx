import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageOne from '../PageOne/PageOne';
function App() {

const dispatch = useDispatch();

useEffect(() => {
  fetchFeedback();
}, []);

//GET Feedback from server
  const fetchFeedback = () => {
    axios
      .get("/api/feedback")
      .then((response) => {
        dispatch({ type: "SET_FEEDBACK", payload: response.data});
      })
      .catch((err) => {
      console.log(err);
      alert("Could not get feedback")
      });
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <PageOne />
    </div>
  );
}

export default App;
