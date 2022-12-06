const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.Port || 5000

const cources = require('./data/cources.json')

app.get('/', (req, res)=>{
    res.send('Hello Programmer')
})

app.get('/cources', (req, res)=>{
    res.send(cources)
})

app.get('/cours/:id', (req, res)=>{
    const id = req.params.id
    const selectedCources = cources.find(c => c.id == id)
    res.send(selectedCources)
})

app.listen(port, ()=>{
    console.log('Server Run in', port)
})
