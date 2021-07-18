import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
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

function PageThree() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [supportValue, setSupportValue] = useState("");
  const classes = useStyles();

  const handleNext = () => {
    event.preventDefault();
    if (supportValue == "") {
      alert("Please enter all fields!");
      return;
    } else
      dispatch({
        type: "SUPPORT_INFO",
        payload: { supportValue },
      });
    history.push("/PageFour");
  };
  return (
    <>
      <h1>How well do you feel supported?</h1>
      <p>1 being not good, 5 being excellent</p>

      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            style={{ padding: "16px 0px 0px, 200px" }}
            id="standard-number"
            label="Number"
            type="number"
            placeholder="1-5"
            required
            label="Required"
            inputProps={{ min: 0, max: 5 }}
            value={supportValue}
            onChange={(evt) => setSupportValue(evt.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default PageThree;
