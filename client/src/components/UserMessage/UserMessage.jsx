import React from 'react';
import styles from './UserMessage.css';

let images;

class UserMessage extends React.Component {
  constructor(props) {
    super(props);

    this.ratingsImage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.imageURI !== null) {
      let parsedImages = JSON.parse(nextProps.imageURI);
      images = parsedImages.map((image, i) => {
        return <img className={styles.images} src={image.imageURI} key={i}/>;
      });
    }
  }

  ratingsImage(valueRating) {
    let ratings = [];
    for (let i = 1; i < 6; i++) {
      if (i <= Number(valueRating)) {
        ratings.push('https://s3-us-west-1.amazonaws.com/fec-reviews-traveltipster/Screen+Shot+2019-01-05+at+7.45.05+PM.png');
      } else {
        ratings.push('https://s3-us-west-1.amazonaws.com/fec-reviews-traveltipster/Screen+Shot+2019-01-05+at+7.43.42+PM.png');
      }
    }

    return ratings.map((image, i) => {
      return (
        <img className={styles.ratingsImage} src={image} key={i} alt='rating'/>
      );
    });
  }

  render() {

    return (
      <div className={styles.wholeUserReviewMessage}>
        <div className={styles.datePosted}><span
          className={styles.overAllRating}>{this.ratingsImage(this.props.overAllRating)}</span>Reviewed {this.props.datePosted}
        </div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.message}>{this.props.message}</div>
        <div className={styles.dateOfStay}>
          <div className={styles.dateOfStayText}>Date of Stay:</div>
          {` ${this.props.dateOfStay}`}</div>
        <div className={styles.flexImages}>
          {images}
        </div>
        <div className={styles.ratings}>
          <div className={styles.tripType}><span
            className={styles.tripTypeText}>Trip type:</span>{` ${this.props.travelerType}`}</div>
          <div className={styles.ratingsColumn}>
            <div>
              <div>{this.ratingsImage(this.props.valueRating)} <span>Value</span></div>
              <div>{this.ratingsImage(this.props.roomRating)} <span>Rooms</span></div>
              <div>{this.ratingsImage(this.props.locationRating)} <span>Location</span></div>
            </div>
            <div>
              <div>{this.ratingsImage(this.props.cleanlinessRating)} <span>Cleanliness</span></div>
              <div>{this.ratingsImage(this.props.serviceRating)} <span>Service</span></div>
              <div>{this.ratingsImage(this.props.sleepQualityRating)} <span>Sleep Quality</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subjective}>This review is the subjective opinion of a TravelTipster member and not of
          TravelTipster LLC.
        </div>
      </div>
    );
  }
}

export default UserMessage;
