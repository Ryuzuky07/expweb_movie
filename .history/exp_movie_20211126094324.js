const express = require('express')
const app = express()
const port = 2000
const path = require('path');

app.get('/h', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join(""))
})

app.get('/', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join(""))
})

app.get('/', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join(""))
})

app.get('/', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join(""))
})

app.get('/', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join(""))
})

app.get('/', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join(""))
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/home`)
  })