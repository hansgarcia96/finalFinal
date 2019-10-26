const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Shenanigan = require('../models/shenanigan-model');
const Transportation = require('../models/transportation-model');


// POST NEW EVENT
router.post('/events', (req, res, next)=>{
 
  Shenanigan.create({
    eventName: req.body.eventName,
    date: req.body.date,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    // images: req.body.images, // is this where we use cloudinary????
    // owner: // How do we get the specific owner from USER
    // User: // 
    transportation: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET ALL EVENTS
router.get('/events', (req, res, next) => {
  Shenanigan.find().populate('transportation')
    .then(allTheEvents => {
      res.json(allTheEvents);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET SPECIFIC EVENT
router.get('/events/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Shenanigan.findById(req.params.id)//.populate('User') <------ USER??
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT/EDIT SPECIFIC EVENT
router.put('/events/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Shenanigan.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Event with ${req.body.eventName} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE SPECIFIC EVENT
router.delete('/events/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Shenanigan.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Project with ${req.body.eventName} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})




module.exports = router;