const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//GET feedback database info
router.get("/", (req, res) => {
  console.log("GET /api/feedback");
  //select all data from feedback table
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/feedback", error);
      res.sendStatus(500);
    });
});
//POST new feedback to db after submit
router.post("/", (req, res) => {
  let newFeedback = req.body;
  console.log(`Adding feedback`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "support", "understanding", "comments")
                         VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      newFeedback.feeling,
      newFeedback.support,
      newFeedback.understanding,
      newFeedback.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});
module.exports = router;
