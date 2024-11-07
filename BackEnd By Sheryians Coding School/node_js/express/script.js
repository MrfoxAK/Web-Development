const express = require('express')

const app = express();

app.get("/", function (req, res) {
     res.send("Welcome");
})

app.get("/profile", function (req, res) {
     res.send("Your Profile");
})

app.listen(3000, function () {
     // console.log("Server is running on port 3000");
})