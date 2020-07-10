const express = require('express');
const { restart } = require('nodemon');
const router = express.Router()

router.get('/', (req, res) => {
  res.render("pages/gallery.ejs");
})

module.exports = router