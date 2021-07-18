import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
function ThankYouPage() {

const dispatch = useDispatch();
const resetForm = () => {
    console.log('Clicked back to new form');
    event.preventDefault();
    
        dispatch({
            type: "RESET_FEELINGS",
            payload: ''
        })
        dispatch({
            type: "RESET_SUPPORT",
            payload: ''
        })
        dispatch({
            type: "RESET_UNDERSTANDING",
            payload: ''
        })
        dispatch({
            type: "RESET_COMMENTS",
            payload: ''
        })
    }


return(
    <>
    <h1> Your for was successfully submitted!</h1>
    <h2>Thank you for this valuable feedback! </h2>
    <p>If you'd like to fill out another form click below.</p>
    
    <Link to="/">
    <button type="button" onClick={() => resetForm()}>Return to New Feedback Form</button>
    </Link>
    </>
)
}
export default ThankYouPage;