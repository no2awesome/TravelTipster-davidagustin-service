import React from 'react';
import $ from 'jquery';
import TotalReviews from '../TotalReviews/TotalReviews.jsx';
import TravelRating from '../TravelRating/TravelRating.jsx';
import TimeOfYear from '../TimeOfYear/TimeOfYear.jsx';
import TravelerType from '../TravelerType/TravelerType.jsx';
import SearchReviews from '../SearchReviews/SearchReviews.jsx';
import UserReviewPagination from '../UserReviewPagination/UserReviewPagination.jsx';


export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelData: ['empty']
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $.get({
      url: `http://localhost:3000/hotels/${this.props.hotelItem}/reviews`
    }).then((hotelData => {
      console.log(hotelData);
      this.setState({
        hotelData: hotelData
      });
    }));

  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {

    //Pass down all of user ratings to TravelRating component
    let ratingsArray = [];
    for (let i = 0; i < this.state.hotelData.length; i++) {
      ratingsArray.push(this.state.hotelData[i]['overallRating']);
    }

    return (
      <div>
        <TotalReviews total={this.state.hotelData.length}/>
        <h1>Reviews</h1>
        <div>
          <TravelRating ratings={ratingsArray}/>
          <TimeOfYear />
          <TravelerType />
        </div>
        <div>
          <SearchReviews />
        </div>
        <UserReviewPagination hotelItem={this.props.hotelItem}/>
      </div>
    );
  }

}
