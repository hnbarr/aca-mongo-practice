const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 4000


mongoose.connect('mongodb+srv://admin:admin@cluster0-fj5rl.mongodb.net/test?retryWrites=true&w=majority')

app.use(bodyParser.json())
app.use('/users', usersRouter)

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})