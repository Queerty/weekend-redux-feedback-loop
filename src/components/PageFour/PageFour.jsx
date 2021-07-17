import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function PageFour() {
const dispatch = useDispatch();
const [commentValue, setCommentValue] = useState('')


    const handleNext = () => {
        event.preventDefault();
    
        dispatch({
            type: "COMMENT_INFO",
            payload: {commentValue}
        })
    }
    return(
        <>
        <h1>Any additional comments?</h1>
        <input
    placeholder="Feel free to share."
    value={commentValue}
    onChange={(evt) => setCommentValue(evt.target.value)}
    />
    {/* <Link to="/PageFour"> */}
    <button type="button" onClick={handleNext}>Next</button>
    {/* </Link> */}
        </>
    )
}

export default PageFour;