
import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function ReviewPage() {
//select info from store to populate review
const selectedFeeling = useSelector((store) => store.feelingInfo)
const selectedUnderstanding = useSelector((store) => store.understandingInfo)
const selectedSupport = useSelector((store) => store.supportInfo)
const selectedComment = useSelector((store) => store.commentInfo)
//set feelings value
const dispatch = useDispatch();

const handleSubmit = () => {
    event.preventDefault();

    dispatch({
        // type: "FEELINGS_INFO",
        // payload: {feelingsValue}
    })
}


// axios({
//     method: "POST",
//     url: "/api/feedback",
//     data: {
//         feeling: {selectedFeeling},
//         understanding: {selectedUnderstanding},
//         support: {selectedSupport},
//         comments: {selectedComment},
        // flagged: boolean default false,
        // date: date not null default CURRENT_DATE
//     },
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log("this is a Post error", err);
//     });


return(
    <>
    <div>Review your feedback:</div>
    Feeling: {selectedFeeling.feelingsValue}
    Support: {selectedSupport.supportValue}
    Understanding: {selectedUnderstanding.understandingValue}
    Comment: {selectedComment.commentValue}

    
    <Link to="/">
    <button type="button" onClick={handleSubmit}>Submit</button>
    </Link>
    </>
)
}
export default ReviewPage;