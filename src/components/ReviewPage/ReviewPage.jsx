
import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: 'auto',
        width: 'auto',
      },
    },
  }));

function ReviewPage() {
//select info from store to populate review
const selectedFeeling = useSelector((store) => store.feelingInfo)
const selectedUnderstanding = useSelector((store) => store.understandingInfo)
const selectedSupport = useSelector((store) => store.supportInfo)
const selectedComment = useSelector((store) => store.commentInfo)
//set feelings value
const dispatch = useDispatch();

   const feelingValue= selectedFeeling.feelingsValue;
   const supportValue= selectedSupport.supportValue;
   const understandingValue= selectedUnderstanding.understandingValue;
   const commentsValue= selectedComment.commentValue;
   const history = useHistory(); 
   const classes = useStyles();

   const handleSubmit = () => {
    event.preventDefault();

   axios({
    method: "POST",
    url: "/api/feedback",
    data: {
      feeling: feelingValue,
      support: supportValue,
      understanding: understandingValue,
      comments: commentsValue
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("this is a Post error", err);
    });
    history.push('/ThankYouPage');

}; 

return(
    
    <Grid  
    container
    direction="row"
    alignItems="center">
<Grid item xs={12} md={6}>
<Typography variant="h6" className={classes.title}>

    <div>Review your feedback:</div>
    </Typography>
    <List>
    <ListItem>

    Feeling: {selectedFeeling.feelingsValue}
    </ListItem>

    <ListItem>

    Support: {selectedSupport.supportValue}
    </ListItem>

    <ListItem>

    Understanding: {selectedUnderstanding.understandingValue}
    </ListItem>

    <ListItem>

    Comment: {selectedComment.commentValue}
    </ListItem>
    </List>
    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>

    </Grid>
    </Grid>
    
   
)
}
export default ReviewPage;

