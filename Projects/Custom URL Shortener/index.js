const express = require('express');
const { connectToMongoDB } = require("./connect")
const urlRoute = require('./routes/url');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/shorterURL').then(()=> console.log("MongoDB connection established"))

app.use(express.json());
app.use('/url', urlRoute);




app.listen(PORT, ()=>{
     console.log(`Server Started at ${PORT}`);
})