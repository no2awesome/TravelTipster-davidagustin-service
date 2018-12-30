const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('../controller/controller.js');
// let Promise = require('promise');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './../../client/dist')));

app.get('/hotels/:hotelItem/reviews', (req, res) => {
  controller.getReviewData(req.params.hotelItem, (err, data) => {
    if (err) {
      res.sendStatus(404).send();
    } else {
      res.send(data);
    }
  });
});

// app.post('/text', (req, res) => {
//   console.log('app.post fires');
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`TravelTipster Server is listening on PORT ${PORT}`));

