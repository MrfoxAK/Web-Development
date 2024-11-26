const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs');

const app = express();
const port = 8000;

app.use(express.urlencoded({extended: false}));

// Routes

// SSR
app.get('/users', (req, res) => {
     const html = `
     <ul>
          ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
     </ul>
     `;
     res.send(html);
})

// CSR
app.get('/api/users', (req, res) => {
     return res.json(users);
})


app.route('/api/users/:id').get((req, res) => {
     const id  = Number(req.params.id);
     const user = users.find(user => user.id === id);
     return res.json(user);
}).patch((req, res) => {
     // edit user
     return res.json({status:'panding'});
}).delete((req, res) => {
     // delete user
     return res.json({status:'panding'});
});


app.post('/api/users', (req, res) =>{
     const body = req.body;
     users.push({ ...body, id: users.length+1});
     fs,fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
          return res.json({status:'success', id: users.length});
     });
});

app.listen(port, ()=>{
     console.log("server listening on port" + port);
});