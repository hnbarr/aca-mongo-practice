const mongoose = require('mongoose')
const UserSchema = require('./schema')

const UsersModel = mongoose.model('User', UserSchema)

module.exports = UsersModel