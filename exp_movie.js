const express = require('express')
const app = express()
const port = 2000
const path = require('path');



app.use('/assets', express.static('assets'))

app.get('/home', (req, res) => {
  console.log(__dirname)
res.sendFile(path.join('D:/Github/expweb_movie/HTML/index.html'))
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