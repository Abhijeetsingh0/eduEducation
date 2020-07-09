  
const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact:{
      type:String,
      required: true
  },
  email:{
      type:String,
      required:true
  }
  ,dis:{
      type:String
  }
})

module.exports = mongoose.model('Author', authorSchema)