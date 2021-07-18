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

function PageFour() {
  const dispatch = useDispatch();
  const [commentValue, setCommentValue] = useState("");
  const history = useHistory();

  const classes = useStyles();

  const handleNext = () => {
    event.preventDefault();

    dispatch({
      type: "COMMENT_INFO",
      payload: { commentValue },
    });
    history.push("/ReviewPage");
  };
  return (
    <>
      <h1>Any additional comments?</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-required"
            label="Feel free to share"
            value={commentValue}
            onChange={(evt) => setCommentValue(evt.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default PageFour;
