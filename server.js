require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const NarutoForm = require('./models/character')
const app = express()

const db = mongoose.connection


db.once('open',()=>{
    console.log(`connected to Mongodb on ${db.host}:${db.port}`)
})

db.on('error',(err)=>{
    console.log('Error, err')
})

app.use(express.urlencoded({extended: false}))

mongoose.connect(`mongodb://127.0.0.1:27817/mongooseAssociation`)

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/form',(req,res)=>{
    NarutoForm.create({
        name: 'kakashi',
        village: 'village hidden in the leaves'
    })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server listening on PORT: ${PORT}`)
})