const express = require('express');
const router  = express.Router();
const User = require("../models/User");


router.get('/trip/:id', (req, res, next) => {




  
});
router.post('/trip', (req, res, next) => {});
router.put('/trip/:id', (req, res, next) => {});
router.delete('/trip/:id', (req, res, next) => {});
 
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;
