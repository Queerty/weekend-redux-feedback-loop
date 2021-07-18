import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import React from "react";

function ThankYouPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const resetForm = () => {
    console.log("Clicked back to new form");
    event.preventDefault();

    dispatch({
      type: "RESET_FEELINGS",
      payload: "",
    });
    dispatch({
      type: "RESET_SUPPORT",
      payload: "",
    });
    dispatch({
      type: "RESET_UNDERSTANDING",
      payload: "",
    });
    dispatch({
      type: "RESET_COMMENTS",
      payload: "",
    });
    history.push("/");
  };

  return (
    <>
      <h1> Your feedback was successfully submitted!</h1>
      <h2>Thank you! </h2>
      <p>If you'd like to fill out another form click below.</p>

      <Button variant="contained" color="primary" onClick={() => resetForm()}>
        Return to New Feedback Form
      </Button>
    </>
  );
}
export default ThankYouPage;
