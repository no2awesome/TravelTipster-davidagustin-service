const db = require('../../db');

const getReviewData = (hotelItem, callback) => {
  hotelItem = Number(hotelItem);

  let hotelItemQuery = `SELECT * FROM userReviewMessage 
  LEFT JOIN reply 
    ON userReviewMessage.reviewID = reply.reviewIDFK 
  LEFT JOIN user 
    ON userReviewMessage.userWhoPostedMessageIDFK = user.userID 
  LEFT JOIN images ON userReviewMessage.userWhoPostedMessageIDFK = images.userWhoPostedImageIDFK 
WHERE locationIDFK = "${hotelItem}"`;


  db.query(hotelItemQuery, (err, hotelData) => {
    if (err) {
      callback(err);
    } else {
      callback(null, hotelData);
    }
  });
};

module.exports = {
  getReviewData
};
