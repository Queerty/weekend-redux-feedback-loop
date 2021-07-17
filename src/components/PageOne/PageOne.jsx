// import "./PageOne.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function PageOne() {
//set feelings value
const dispatch = useDispatch();
const [feelingsValue, setFeelingsValue] = useState('')

const handleNext = () => {
    event.preventDefault();

    dispatch({
        type: "FEELINGS_INFO",
        payload: {feelingsValue}
    })
}
return(
    <>
    <div>How are you feeling today?</div>
    <input
    placeholder="1-5"
    value={feelingsValue}
    onChange={(evt) => setFeelingsValue(evt.target.value)}
    />
    <Link to="/PageTwo">
    <button type="button" onClick={handleNext}>Next</button>
    </Link>
    </>
)
}

export default PageOne;