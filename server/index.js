const db = require('./../db/index.js');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// let Promise = require('promise');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './../client/dist')));

app.post('/text', (req, res) => {
  console.log('text fires!');
  console.log('req.body', req.body);
});

app.get('/text', (req, res) => {
  console.log('app.get fires');
});


const { userTable, imagesTable, hotelsTable, userReviewMessage, replyTable } = require('../db/faker.js');

// console.log(userTable);
// console.log(imagesTable);
// console.log(hotelsTable);
// console.log(userReviewMessage);
// console.log(replyTable);


for (let i = 0; i < userTable.length; i++) {
  let user = `INSERT INTO user (userName, userImage) VALUES ("${userTable[i].userName}", '${userTable[i].userImage}')`;
  db.query(user, (err) => {

    if (err) {
      console.log('ERROR INSERT userName', `"${userTable[i].userName}", "${userTable[i].userImage}"`);
    }
  });
}

for (let i = 0; i < imagesTable.length; i++) {
  let images = `INSERT INTO images (imageURI, userWhoPostedImageIDFK) VALUES ('${imagesTable[i].imageURI}', '${imagesTable[i].userWhoPostedImageIDFK}')`;

  db.query(images, (err) => {
    if (err) {
      console.log('ERROR INSERT images', imagesTable[i].imageURI);
    }
  });
}

for (let i = 0; i < hotelsTable.length; i++) {
  let hotels = `INSERT INTO hotels (hotelName, hotelAddress, hotelCity, hotelState, hotelZipCode, amountOfReviews, averageOverallHotelRating) VALUES ("${hotelsTable[i].hotelName}", "${hotelsTable[i].hotelAddress}", "${hotelsTable[i].hotelCity}", "${hotelsTable[i].hotelState}", "${hotelsTable[i].hotelZipCode}", ${hotelsTable[i].amountOfReviews}, ${hotelsTable[i].averageOverallHotelRating})`;
  db.query(hotels, (err) => {
    if (err) {
      console.log((`ERROR '${hotelsTable[i].hotelName}', '${hotelsTable[i].hotelAddress}','${hotelsTable[i].hotelCity}','${hotelsTable[i].hotelState}','${hotelsTable[i].hotelZipCode}','${hotelsTable[i].averageOverallHotelRating}'`));
    }
  });
}

for (let i = 0; i < userReviewMessage.length; i++) {
  let userReview = `INSERT INTO userReviewMessage (locationIDFK, userWhoPostedMessageIDFK, overallRating, amountOfReviewsFK, title, message, dateOfStay, travelerType, hotelOfUserReviewMessage, valueRating, locationRating, serviceRating, roomRating, cleanlinessRating, memberOrLLC, totalHelpfulClicked, datePosted) VALUES (${userReviewMessage[i].locationIDFK}, ${userReviewMessage[i].userWhoPostedMessageIDFK}, ${userReviewMessage[i].overAllRating}, ${userReviewMessage[i].amountOfReviewsFK}, "${userReviewMessage[i].title}", "${userReviewMessage[i].message}", "${userReviewMessage[i].dateOfStay}","${userReviewMessage[i].travelerType}", ${userReviewMessage[i].hotelOfUserReviewMessage}, ${userReviewMessage[i].valueRating}, ${userReviewMessage[i].locationRating}, ${userReviewMessage[i].serviceRating}, ${userReviewMessage[i].roomRating}, ${userReviewMessage[i].cleanlinessRating}, ${userReviewMessage[i].memberOrLLC}, ${userReviewMessage[i].helpfulClicked}, "${userReviewMessage[i].datePosted}")`;

  db.query(userReview, (err) => {
    if (err) {
      console.log(`ERROR ${userReviewMessage[i].locationIDFK}`);
    }
  });
}

for (let i = 0; i < replyTable.length; i++) {
  let repliedMessage = `INSERT INTO reply (name, position, replyMessage, timeReplied, reviewIDFK) VALUES ("${replyTable[i].name}", "${replyTable[i].position}", "${replyTable[i].replyMessage}", "${replyTable[i].timeReplied}", ${replyTable[i].reviewIDFK})`;

  db.query(repliedMessage, (err) => {
    if (err) {
      console.log('ERROR', replyTable[i].reviewIDFK);
    }
  });
}

const PORT = 3000;
app.listen(PORT, () => console.log(`TravelTipster Server is listening on PORT ${PORT}`));

