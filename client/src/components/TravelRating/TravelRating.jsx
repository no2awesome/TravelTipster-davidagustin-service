import React from 'react';

class TravelerRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ExcellentChecked: false,
      GoodChecked: false,
      AverageChecked: false,
      PoorChecked: false,
      TerribleChecked: false
    };

  }

  render() {
    let ratingsCount = {
      Excellent: 0,
      Good: 0,
      Average: 0,
      Poor: 0,
      Terrible: 0
    };

    // Number refers to a key in ratingsCount with 5 as Excellent
    for (let i = 0; i < this.props.ratings.length; i++) {
      if (this.props.ratings[i] === 5) {
        ratingsCount['Excellent'] += 1;
      } else if (this.props.ratings[i] === 4) {
        ratingsCount['Good'] += 1;
      } else if (this.props.ratings[i] === 3) {
        ratingsCount['Average'] += 1;
      } else if (this.props.ratings[i] === 2) {
        ratingsCount['Poor'] += 1;
      } else {
        ratingsCount['Terrible'] += 1;
      }
    }

    return (
      <div>
        <p><b>Traveler rating</b></p>
        <div>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"> </span>
            Excellent: {ratingsCount['Excellent']}
          </label>
        </div>
        <div>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"> </span>
            Good: {ratingsCount['Good']}
          </label>
        </div>
        <div>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"> </span>
            Average: {ratingsCount['Average']}
          </label>
        </div>
        <div>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"> </span>
            Poor: {ratingsCount['Poor']}
          </label>
        </div>
        <div>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"> </span>
            Terrible: {ratingsCount['Terrible']}
          </label>
        </div>
      </div>
    );
  }
}

export default TravelerRating;
