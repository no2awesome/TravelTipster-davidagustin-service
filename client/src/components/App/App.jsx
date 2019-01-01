import React from 'react';
import $ from 'jquery';
import Filter from '../Filter/Filter.jsx';
import TotalReviews from '../TotalReviews/TotalReviews.jsx';


export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelData: ['empty']
    };
    this.ratings = [];
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    $.get({
      url: `http://localhost:3000/hotels/${this.props.hotelItem}/reviews`
    }).then((hotelData => {
      for (let i = 0; i < hotelData.length; i++) {
        this.ratings.push(hotelData[i]['overAllRating']);
      }
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

    //Pass down all of user ratings to Filter component
    // let ratings = [];

    return (
      <div>
        <TotalReviews total={this.state.hotelData.length}/>
        <h1>Reviews</h1>
        <Filter ratings={this.ratings} hotelItem={this.props.hotelItem}/>
      </div>
    );
  }

}
