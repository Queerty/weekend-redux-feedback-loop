const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET feedback database info
router.get('/', (req, res) => {
    console.log('GET /api/feedback');
    //select all data from feedback table
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error)
        res.sendStatus(500);
    })
});
    //POST new feedback
//     router.post('/', async (req, res) => {
//         const client = await pool.connect();

//         try {
//             const {

//             }
//         }
//     })
// })