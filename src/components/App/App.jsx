import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//Feedback Pages
//feelings
import PageOne from '../PageOne/PageOne';
//understanding
import PageTwo from '../PageTwo/PageTwo';
//support
import PageThree from '../PageThree/PageThree';
//comment
import PageFour from '../PageFour/PageFour';
//Review
import ReviewPage from '../ReviewPage/ReviewPage';
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
      <Router>
        <Route path="/" exact>
      <PageOne />
      </Route>

      <Route path="/PageTwo" exact>
      <PageTwo />
      </Route>

      <Route path="/PageThree" exact>
      <PageThree />
      </Route>

      <Route path="/PageFour" exact>
      <PageFour />
      </Route>

      <Route path="/ReviewPage" exact>
      <ReviewPage />
      </Route>

      </Router>
    </div>
  );
}

export default App;
