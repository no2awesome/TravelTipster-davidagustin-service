let faker = require('faker');
let loremIpsum = require('lorem-ipsum');

let userTable = [];
for (let i = 0; i < 101; i++) {
  let userTableObject = {
    userID: i + 1,
    userName: faker.name.findName(),
    userImage: faker.image.avatar(),
  };
  userTable.push(userTableObject);
}

let imagesTable = [];
for (let i = 1; i < 101; i++) {
  let imagesPosted = Math.floor(Math.random() * 4);
  for (let j = 0; j <= imagesPosted; j++) {
    let imagesTableObject = {
      userWhoPostedImageIDFK: i,
      imageURI: faker.image.city()
    };
    imagesTable.push(imagesTableObject);
  }
}

let hotelsTable = [];
for (let i = 0; i < 101; i++) {
  let hotelsTableObject = {
    hotelID: i + 1,
    hotelName: faker.name.lastName() + ' hotel',
    hotelAddress: faker.address.streetAddress(),
    hotelCity: faker.address.city(),
    hotelState: faker.address.state(),
    hotelZipCode: faker.address.zipCode(),
    amountOfReviews: 0,
    averageOverallHotelRating: 0
  };
  hotelsTable.push(hotelsTableObject);
}

function createRating() {
  return Math.floor(Math.random() * 4) + 1;
}

function dateGenerator(string) {
  let yearOfStay;

  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let chooseRandomMonth = MONTHS[Math.floor(Math.random() * 11) + 1];

  if (string) {
    let monthIsolated = string.slice(1, -6);

    let monthIndex = MONTHS.indexOf(monthIsolated) + 1;

    //chooseRandomMonthEqualOrHigherThanDateStayed;
    chooseRandomMonth = Math.floor(Math.random() * (12 - monthIndex)) + monthIndex;
    if (chooseRandomMonth.toString().length === 1) {
      chooseRandomMonth = '0' + chooseRandomMonth;
    }
    chooseRandomMonth = MONTHS[Number(chooseRandomMonth) - 1];
    let yearIsolated = string.slice(-5, -1);
    yearOfStay = JSON.stringify(faker.date.between(`${yearIsolated}-${chooseRandomMonth}-01`, '2018-12-31'))
      .slice(1, 5);
    return `${chooseRandomMonth} ${yearOfStay}`;

  } else {
    yearOfStay = JSON.stringify(faker.date.between('2015-01-01', '2018-12-31'))
      .slice(1, 5);
    return `${chooseRandomMonth} ${yearOfStay}`;
  }
}

// Create title
function createTitle() {
  let title = loremIpsum({
    count: 1,
    units: 'words',
    format: 'plain'
  });
  return title.charAt(0)
    .toUpperCase() + title.slice(1);
}

// Create message
function createMessage() {
  return loremIpsum({
    count: 3,
    units: 'paragraphs',
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    format: 'plain'
  });
}

function createTravelerType() {
  const ENUM =
    [
      'Business',
      'Couples',
      'Family',
      'Friends',
      'Solo'
    ];
  let chooseRandomTravelType = Math.floor(Math.random() * 5);
  return ENUM[chooseRandomTravelType];
}

function createBool() {
  let randomBool = Math.floor(Math.random() * 2);
  if (randomBool === 0) {
    return false;
  } else {
    return true;
  }
}

let userReviewMessage = [];
let reviewID = 1;

for (let i = 0; i < 2000; i++) {

  let userWhoReviewMessageObject = {};
  let amountOfUserMessages = Math.floor(Math.random() * 4) + 1;
  let randomUserID = Math.floor(Math.random() * 101);
  for (let j = 0; j < amountOfUserMessages; j++) {
    let hotelOfReviewID = Math.floor(Math.random() * 100);
    // console.log( hotelsTable[hotelOfReviewID].hotelID);
    // console.log('randomUserID: ', randomUserID);
    // console.log(userTable[randomUserID].userID);
    userWhoReviewMessageObject = {
      reviewID: reviewID,
      locationIDFK: hotelsTable[hotelOfReviewID].hotelID,
      userWhoPostedMessageIDFK: userTable[randomUserID].userID,
      overAllRating: createRating(),
      amountOfReviewsFK: hotelsTable[hotelOfReviewID].amountOfReviews += 1,
      title: createTitle(),
      message: createMessage(),
      dateOfStay: dateGenerator(),
      travelerType: createTravelerType(),
      hotelOfUserReviewMessage: userTable[randomUserID].userID,
      valueRating: createRating(),
      locationRating: createRating(),
      serviceRating: createRating(),
      roomRating: createRating(),
      cleanlinessRating: createRating(),
      memberOrLLC: createBool(),
      helpfulClicked: createBool(),
      totalHelpfulClicks: Math.floor(Math.random() * 4)
    };

    userWhoReviewMessageObject.datePosted = dateGenerator(JSON.stringify(userWhoReviewMessageObject.dateOfStay));

    //Overall average for a certain hotel, a rating modifies the overall average
    hotelsTable[hotelOfReviewID].averageOverallHotelRating = Math.round((((hotelsTable[hotelOfReviewID].averageOverallHotelRating + userWhoReviewMessageObject.overAllRating) / 2)) * 2) / 2;
    reviewID++;
    userReviewMessage.push(userWhoReviewMessageObject);
  }
}

let replyTable = [];
for (let i = 0; i < userReviewMessage.length; i++) {
  let repliedToMessage = createBool();
  if (repliedToMessage) {
    for (let j = 0; j < 1; j++) {
      let replyTableObject = {
        reviewIDFK: i + 1,
        name: faker.name.findName(),
        position: faker.name.jobTitle(),
        replyMessage: createMessage(),
        timeReplied: (faker.date.between('2015-01-01', '2018-12-31')).toString()
          .slice(0, 10)
      };
      replyTable.push(replyTableObject);
    }
  }
}

// console.log(userTable);
// console.log(imagesTable);
// console.log(hotelsTable);
// console.log(userReviewMessage);
// console.log(replyTable);



module.exports = {
  userTable,
  imagesTable,
  hotelsTable,
  userReviewMessage,
  replyTable
};
