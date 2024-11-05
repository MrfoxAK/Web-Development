const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("Get Request");
  res.send('Hello World! get')
})

app.post('/', (req, res) => {
  console.log("Post Request");
  res.send('Hello World! post')
})

app.put('/', (req, res) => {
  console.log("Post Request");
  res.send('Hello World! post')
})


app.get('/index', (req, res) => {
  console.log("index");
  res.sendFile('templates/index.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})