const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchName = "Search Now"
  let arr = [1,"AK",6]
  res.render("index", { siteName: siteName, searchName: searchName , arr})
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Adidas why and when?"
  let blogContent = "Its a Very good Brand"
  res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})