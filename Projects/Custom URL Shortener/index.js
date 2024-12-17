const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(() => console.log('MongoDB connection established'));

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortID', async (req, res) => {
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



