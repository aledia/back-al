const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Circuit = require("../models/Circuits");

router.get("/:id", (req, res, next) => {
  Circuit.findById(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res, next) => {
  Circuit.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res, next) => {
  const { title, description, image_url, coords } = req.body;

  Circuit.create({
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

