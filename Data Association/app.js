const express = require('express')
const app = express();
const port = 3000;
const postModel = require('./models/post');
const userModel = require('./models/user');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/create", async function (req, res) {
  let user = await userModel.create({
    username: "JohnDoe",
    email: "john.doe@example.com",
    age: 25
  })
  res.send(user)
})

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postData: "HY everyone!",
    user: "676425e6e04254e7be1ec5d1",
  });
  let user = await userModel.findOne({_id: "676425e6e04254e7be1ec5d1"});
  user.posts.push(post._id);
  await user.save();
  res.send({post, user});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});