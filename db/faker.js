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
let imagesURIArray = [];
for (let i = 1; i < 101; i++) {
  let imagesPosted = Math.floor(Math.random() * 4);
  for (let j = 0; j <= imagesPosted; j++) {
    imagesURIArray.push({imageURI: faker.image.city()});
  }
  let imagesTableObject = {
    userWhoPostedImageIDFK: i,
    imageURI: JSON.stringify(imagesURIArray)
  };
  imagesTable.push(imagesTableObject);
  imagesURIArray = [];
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

const createRating = () => Math.floor(Math.random() * 5) + 1;

const dateGenerator = string => {
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
};

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
const createMessage = () => loremIpsum({
  count: 3,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  format: 'plain'
});

const createTravelerType = () => {
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
};

const createBool = () => {
  let randomBool = Math.floor(Math.random() * 2);
  return randomBool !== 0;
};

let userReviewMessage = [];
let reviewID = 1;

for (let i = 0; i < 2000; i++) {

  let userWhoReviewMessageObject = {};
  let amountOfUserMessages = Math.floor(Math.random() * 4) + 1;
  let randomUserID = Math.floor(Math.random() * 101);
  for (let j = 0; j < amountOfUserMessages; j++) {
    let hotelOfReviewID = Math.floor(Math.random() * 100);
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

module.exports = {
  userTable,
  imagesTable,
  hotelsTable,
  userReviewMessage,
  replyTable
};
