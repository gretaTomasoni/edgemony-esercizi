require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
//const md = require('./models/subcribers')

const subRouter = require('./routes/subscriberController')



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error) => console.error(error))

db.once('open', ()=> console.log('Connesso al db'))

app.use(express.json())

//routing
app.use('/api/v1/subscribers',subRouter)

app.listen(2000, () => console.log('Server attivo'))
