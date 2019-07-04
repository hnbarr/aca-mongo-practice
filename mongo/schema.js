const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
   name: String,
   username: String,
   email: String,
   address: Object,
   phone: String,
   website: String,
   company: Object
})

module.exports = UserSchema