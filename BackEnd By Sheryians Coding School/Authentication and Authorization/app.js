const express = require('express');
const app = express();
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.get("/", function(req, res){
     // bcrypt.compare("akash", "$2b$10$Yn33NHrO/2r42oAHIxzUWeidBzLUXLLzsK8kzWGscnCq8ezIGNv/q", function(err, result) {
     //      console.log(result);
     //  });
     let token = jwt.sign({email: "ak@example.com"}, "secret");
     res.cookie("token",token);
     res.send("done");
});

app.get("/read", function(req, res){
     // console.log(req.cookies.token);
     let data = jwt.verify(req.cookies.token, "secret");
     console.log(data);
});

// akash
// $2b$10$Yn33NHrO/2r42oAHIxzUWeidBzLUXLLzsK8kzWGscnCq8ezIGNv/q

app.listen(3000);