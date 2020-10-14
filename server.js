const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/listings', (req, res) => {
  res.send({ listings: [
    {id: 1, title: '271 Lanark', location: {lat: 49.8688, lng: -97.1976}}, 
    {id: 2, title: '879 Warsaw', location: {lat: 49.8673, lng: -97.1583}}] 
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));