const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
     res.send('Hello, World!');
})

app.get('/create', async (req, res) => {
     let createduser = await userModel.create({
          name: 'John',
          email: 'john@example.com',
          age: 13,
          address: '123 Main Street',
          phone: '123-456-7890'
     })
     res.send(createduser);
})

app.listen(3000);