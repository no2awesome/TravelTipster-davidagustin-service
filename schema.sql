DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE user
(
  userID    INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName  TEXT NOT NULL,
  userImage TEXT
);

CREATE TABLE images
(
  imageID                INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  imageURI               TEXT,
  userWhoPostedImageIDFK INT
);

ALTER TABLE images
  ADD FOREIGN KEY (userWhoPostedImageIDFK) REFERENCES user (userID);

CREATE TABLE hotels
(
  hotelID              INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  hotelName            VARCHAR(120),
  hotelAddress         TEXT,
  hotelCity            TEXT,
  hotelState           TEXT,
  hotelZipCode         TEXT,
  amountOfReviews      INT,
  averageOverallHotelRating REAL
);

CREATE TABLE userReviewMessage
(
  reviewID                 INT NOT NULL AUTO_INCREMENT KEY,
  locationIDFK             INT,
  userWhoPostedMessageIDFK INT,
  overallRating            INT,
  amountOfReviewsFK        INT,
  title                    VARCHAR(60),
  message                  TEXT,
  dateOfStay               TEXT,
  travelerType             ENUM ('Business','Couples','Family','Friends','Solo'),
  hotelOfUserReviewMessage INT,
  valueRating              INT,
  locationRating           INT,
  serviceRating            INT,
  roomRating               INT,
  cleanlinessRating        INT,
  memberOrLLC              BOOL,
  helpfulClicked           BOOL,
  totalHelpfulClicked      INT,
  datePosted               TEXT
);

ALTER TABLE userReviewMessage
  ADD FOREIGN KEY (locationIDFK) REFERENCES hotels (hotelID);
ALTER TABLE userReviewMessage
  ADD FOREIGN KEY (userWhoPostedMessageIDFK) REFERENCES user (userID);
ALTER TABLE userReviewMessage
  ADD FOREIGN KEY (amountOfReviewsFK) REFERENCES user (userID);
ALTER TABLE userReviewMessage
  ADD FOREIGN KEY (hotelOfUserReviewMessage) REFERENCES hotels (hotelID);

CREATE TABLE reply
(
  replierID    INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name         TEXT,
  position     TEXT,
  replyMessage TEXT,
  timeReplied  TEXT,
  reviewIDFK   INT
);

ALTER TABLE reply
  ADD FOREIGN KEY (reviewIDFK) REFERENCES userReviewMessage (reviewID);

