// const db = require('../../db');
//
// const getReviewData = (hotelItem, callback) => {
//   hotelItem = Number(hotelItem);
//
//   let hotelItemQuery = `SELECT * FROM userReviewMessage
//   LEFT JOIN reply
//     ON userReviewMessage.reviewID = reply.reviewIDFK
//   LEFT JOIN user
//     ON userReviewMessage.userWhoPostedMessageIDFK = user.userID
//   LEFT JOIN images
//     ON userReviewMessage.userWhoPostedMessageIDFK = images.userWhoPostedImageIDFK
//   LEFT JOIN hotels
//     ON userReviewMessage.hotelOfUserReviewMessage = hotels.hotelID
// WHERE locationIDFK = "${hotelItem}"`;
//
//
//   db.query(hotelItemQuery, (err, hotelData) => {
//     console.log(hotelItemQuery);
//     if (err) {
//       console.log(err);
//       callback(err);
//     } else {
//       callback(null, hotelData);
//     }
//   });
// };
//
// module.exports = {
//   getReviewData
// };
