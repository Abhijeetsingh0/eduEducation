const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All Authors Route
router.get('/sirdb', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try {
    const authors = await Author.find(searchOptions)
    res.render('authors/index', {
      authors: authors,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})
// New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() })
})

// Create Author Route
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    dis: req.body.dis
  })
  try {
    const newAuthor = await author.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`/`)
  } catch {
    res.render('authors/new', {
      author: author,
      errorMessage: 'please fill the form !!'
    })
  }
})

module.exports = router