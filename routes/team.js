const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('pages/team.ejs')
})

module.exports = router