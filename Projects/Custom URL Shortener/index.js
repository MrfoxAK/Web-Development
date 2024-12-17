const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const path = require('path');
const staticRoute = require('./routes/staticRouter');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(() => console.log('MongoDB connection established'));

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.get("/test", async (req, res) => {
     const allurls = await URL.find({});
     return res.render('home',{
          urls: allurls,
     });
});


app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get('/url/:shortID', async (req, res) => {
     const shortID = req.params.shortID;
     console.log(shortID);
     const entry = await URL.findOneAndUpdate(
          {
               shortID
          }, {
          $push: {
               visitHistory: {
                    timestamp: Date.now(),
               },
          },
     });
     console.log(entry);

     res.redirect(entry.redirectURL);
});



app.listen(PORT, () => console.log('server listening on port ' + PORT));



