import React from 'react';
let images;

class UserMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.imageURI !== null ){
      let parsedImages = JSON.parse(nextProps.imageURI);
      images = parsedImages.map((image, i) => {
        return <img src={image.imageURI} key={i} />;
      });
    }
  }

  render() {

    return (
      <div>
        <p>(overall Rating){this.props.overAllRating}</p>
        <p>(this is title)<b>{this.props.title}</b></p>
        {images}
        <p>{this.props.message}</p>
        <p>(dateOfStay){this.props.dateOfStay}</p>
        <p>(tripType){this.props.travelerType}</p>
        <p>(valueRating){this.props.valueRating}</p>
        <p>(roomRating){this.props.roomRating}</p>
        <p>(locationRating){this.props.locationRating}</p>
        <p>(cleanlinessRating){this.props.cleanlinessRating}</p>
        <p>(serviceRating){this.props.serviceRating}</p>
        <p>(sleepQualityRating){this.props.sleepQualityRating}</p>
      </div>
    );
  }
}

export default UserMessage;
