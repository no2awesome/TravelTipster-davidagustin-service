import React from 'react';
import $ from 'jquery';
import Filter from '../Filter/Filter.jsx';
import TotalReviews from '../TotalReviews/TotalReviews.jsx';
import styles from './App.css';


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
      url: '/reviews/test'
    }).then((hotelData => {
      console.log('hotelData', hotelData);
      for (let i = 0; i < hotelData.length; i++) {
        this.ratings.push(hotelData[i]['overAllRating']);
      }
      this.setState({
        hotelData: hotelData
      });
    }));
  }

  // componentWillMount() {
  //   $.get({
  //     url: `http://localhost:3000/hotels/${this.props.hotelItem}/reviews`,
  //   }).then((hotelData => {
  //     console.log(hotelData);
  //     for (let i = 0; i < hotelData.length; i++) {
  //       this.ratings.push(hotelData[i]['overAllRating']);
  //     }
  //     this.setState({
  //       hotelData: hotelData
  //     });
  //   }));
  //
  // }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className={styles.entireBackground}>
        <div className={styles.container}>
          <TotalReviews total={this.state.hotelData.length}/>
          {/*<div className={styles.reviewsTitle}>Reviews</div>*/}
          <Filter ratings={this.ratings} hotelItem={this.props.hotelItem}/>
        </div>
      </div>
    );
  }

}
