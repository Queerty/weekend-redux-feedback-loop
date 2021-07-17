import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function PageTwo() {
    //set understanding value
const dispatch = useDispatch();
const [understandingValue, setUnderstandingValue] = useState('')


    const handleNext = () => {
        event.preventDefault();
    
        dispatch({
            type: "UNDERSTANDING_INFO",
            payload: {understandingValue}
        })
    }
    return(
        <>
        <h1>How well are you understanding the content?</h1>
        <input
    placeholder="1-5"
    value={understandingValue}
    onChange={(evt) => setUnderstandingValue(evt.target.value)}
    />
    <Link to="/PageThree">
    <button type="button" onClick={handleNext}>Next</button>
    </Link>
        </>
    )
}

export default PageTwo;