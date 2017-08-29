const express = require('express');
const router = express.Router();

const Shift = require('../models/shift');

//retrieving data
router.get('/shifts', (req, res, next) => {
  Shift.find(function (err, shifts) {
    res.json(shifts);
  })
});

//add shift
router.post('/shifts', (req, res, next) => {
  let newShift = new Shift({
    shift_giver: req.body.shift_giver,
    shift_taker: req.body.shift_taker,
    shift_date: req.body.shift_date
  });

  newShift.save((err, shift) => {
    if (err) {
      res.json({ msg: 'failed to add contact' });
    }
    else {
      res.json({ msg: 'contact added successfully' })
    }
  })
});

//delete shift
router.delete('/shifts:id', (req, res, next) => {
  Shift.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(result);
    }
  });
});

module.exports = router;
