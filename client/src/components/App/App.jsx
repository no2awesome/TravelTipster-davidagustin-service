import React from 'react';
import $ from 'jquery';
import TotalReviews from '../TotalReviews/TotalReviews.jsx';
import TravelRating from '../TravelRating/TravelRating.jsx';
import TimeOfYear from '../TimeOfYear/TimeOfYear.jsx';
import TravelerType from '../TravelerType/TravelerType.jsx';
import SearchReviews from '../SearchReviews/SearchReviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      update: 'text will change if button works',
      hotelData: ['empty']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();

    let data = {
      text: this.state.text
    };
    fetch('/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
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
        <h1>Reviews </h1>
        <div>
          <TravelRating ratings={ratingsArray}/>
          <TimeOfYear />
          <TravelerType />
        </div>
        <div>
          <SearchReviews />
        </div>
      </div>
    );
  }

}

