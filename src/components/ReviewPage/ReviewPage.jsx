
import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";

function ReviewPage() {
//select info from store to populate review
const selectedFeeling = useSelector((store) => store.feelingInfo)
const selectedUnderstanding = useSelector((store) => store.understandingInfo)
const selectedSupport = useSelector((store) => store.supportInfo)
const selectedComment = useSelector((store) => store.commentInfo)
//set feelings value
const dispatch = useDispatch();




   const feelingValue= selectedFeeling.feelingsValue;
   const supportValue= selectedSupport.supportValue;
   const understandingValue= selectedUnderstanding.understandingValue;
   const commentsValue= selectedComment.commentValue;
 
   const handleSubmit = () => {
    event.preventDefault();

   axios({
    method: "POST",
    url: "/api/feedback",
    data: {
      feeling: feelingValue,
      support: supportValue,
      understanding: understandingValue,
      comments: commentsValue
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("this is a Post error", err);
    });
}; 

return(
    <>
    <div>Review your feedback:</div>
    <ul>
    <li>Feeling: {selectedFeeling.feelingsValue}</li>
    
    <li>Support: {selectedSupport.supportValue}</li>
    
    <li>Understanding: {selectedUnderstanding.understandingValue}</li>
    
    <li>Comment: {selectedComment.commentValue}</li>
    </ul>
    
    <Link to="/">
    <button type="button" onClick={handleSubmit}>Submit</button>
    </Link>
    </>
)
}
export default ReviewPage;