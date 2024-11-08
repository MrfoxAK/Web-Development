const express = require('express')
const app = express();

app.use(function (req, res, next) {
     console.log("Middleware chala");
     next();
})

app.get("/", function (req, res) {
     res.send("Welcome");
})

app.get("/profile", function (req, res, next) {
     res.send("Your Profile");
})

app.use((err, req, res, next) => {
     console.error(err.stack)
     res.status(500).send('Something broke!')
})

app.listen(3000, function () {
     console.log("Server is running on port 3000");
})