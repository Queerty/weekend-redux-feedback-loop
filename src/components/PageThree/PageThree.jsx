import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function PageThree() {
const dispatch = useDispatch();
const [supportValue, setSupportValue] = useState('')


    const handleNext = () => {
        event.preventDefault();
    
        dispatch({
            type: "SUPPORT_INFO",
            payload: {supportValue}
        })
    }
    return(
        <>
        <h1>How well do you feel supported?</h1>
        <input
    placeholder="1-5"
    value={supportValue}
    onChange={(evt) => setSupportValue(evt.target.value)}
    />
    <Link to="/PageFour">
    <button type="button" onClick={handleNext}>Next</button>
    </Link>
        </>
    )
}

export default PageThree;
