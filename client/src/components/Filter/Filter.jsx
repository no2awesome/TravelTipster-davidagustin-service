import React from 'react';
import UserReviewPagination from '../UserReviewPagination/UserReviewPagination.jsx';

let ratingsCount = {
  Excellent: 0,
  Good: 0,
  Average: 0,
  Poor: 0,
  Terrible: 0
};

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FamiliesChecked: false,
      CouplesChecked: false,
      BusinessChecked: false,
      FriendsChecked: false,
      SoloChecked: false,
      ExcellentChecked: false,
      GoodChecked: false,
      AverageChecked: false,
      PoorChecked: false,
      TerribleChecked: false,
      MarMayChecked: false,
      JunAugChecked: false,
      SepNovChecked: false,
      DecFebChecked: false,
      searchReviewText: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
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
  }

  handleClick(e) {
    if (this.state[`${e.target.value}Checked`] === false) {
      this.setState({
        [`${e.target.value}Checked`]: true
      });
    } else {
      this.setState({
        [`${e.target.value}Checked`]: false
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <p><b>Traveler rating</b></p>
          <div>
            <label className="container">
              <input type="checkbox" value="Excellent" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Excellent: {ratingsCount['Excellent']}
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Good" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Good: {ratingsCount['Good']}
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Average" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Average: {ratingsCount['Average']}
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Poor" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Poor: {ratingsCount['Poor']}
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Terrible" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Terrible: {ratingsCount['Terrible']}
            </label>
          </div>
        </div>
        <div>
          <p><b>Traveler Type</b></p>
          <div>
            <label className="container">
              <input type="checkbox" value="Families" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Families
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Couples" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Couples
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Business" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Business
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Friends" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Friends
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="Solo" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Solo
            </label>
          </div>
        </div>
        <div>
          <p><b>Time of year</b></p>
          <div>
            <label className="container">
              <input type="checkbox" value="MarMay" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Mar-May
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="JunAug" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Jun-Aug
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="SepNov" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Sep-Nov
            </label>
          </div>
          <div>
            <label className="container">
              <input type="checkbox" value="DecFeb" onClick={this.handleClick}/>
              <span className="checkmark"> </span>
              Dec-Feb
            </label>
          </div>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <p> Search Review Icon goes here
              <input name="searchReviewText" value={this.state.searchReviewText} onChange={this.handleChange}/>
            </p>
          </form>
        </div>
        <UserReviewPagination hotelItem={this.props.hotelItem} filter={this.state}/>
      </div>
    );
  }
}

export default Filter;
