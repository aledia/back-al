const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Circuit = require("../models/Circuits");



router.get("/", (req, res, next) => {
  Circuit.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res, next) => {
  Circuit.findById(req.params.id).populate('creator_id')
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});



router.get("/creator/:id", (req, res, next) => {
  // console.log(req.params.id);
  Circuit.find({creator_id: req.params.id})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      // console.log(err);
    });
});


router.post("/new", (req, res, next) => {
  const { title, descriptions, image_url, creator_id } = req.body;

  Circuit.create({
    title,
    descriptions,
    image_url,
    creator_id
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/:id", (req, res, next) => {
  const { title, description, image_url, coords } = req.body;
  Circuit.findByIdAndUpdate(req.params.id, {
    title,
    description,
    image_url,
    coords
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Circuit.findByIdAndDelete(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;

