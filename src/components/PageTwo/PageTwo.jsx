import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
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

function PageTwo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  //set understanding value
  const [understandingValue, setUnderstandingValue] = useState("");

  const handleNext = () => {
    event.preventDefault();
    if (understandingValue == "") {
      alert("Please enter all fields!");
      return;
    } else
      dispatch({
        type: "UNDERSTANDING_INFO",
        payload: { understandingValue },
      });
    history.push("/PageThree");
  };
  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <p>1 being did not understand and 5 completely understood</p>

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
            value={understandingValue}
            onChange={(evt) => setUnderstandingValue(evt.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default PageTwo;
