import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function PageOne() {
  //set feelings value
  const classes = useStyles();

  const dispatch = useDispatch();
  const [feelingsValue, setFeelingsValue] = useState("");
  const history = useHistory();

  const handleNext = () => {
    event.preventDefault();

    if (feelingsValue == "") {
      alert("Please enter all fields!");
      return;
    } else
      dispatch({
        type: "FEELINGS_INFO",
        payload: { feelingsValue },
      });
    history.push("/PageTwo");
  };
  return (
    <>
      <h1>How are you feeling today?</h1>
      <p>1 being not good, 5 being excellent</p>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            placeholder="1-5"
            required
            label="Required"
            inputProps={{ min: 0, max: 5 }}
            value={feelingsValue}
            onChange={(evt) => setFeelingsValue(evt.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default PageOne;
