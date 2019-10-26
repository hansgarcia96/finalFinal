const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Transportation = require('../models/transportation-model');


// POST route => to create a new project
router.post('/transportation', (req, res, next)=>{
 
  Transportation.create({
    vehicleType: req.body.vehicleType,
    model: req.body.model,
    year: req.body.year,
    // images:
    seats: req.body.year,
   
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});


module.exports = router;