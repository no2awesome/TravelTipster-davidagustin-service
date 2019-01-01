import React from 'react';
import $ from 'jquery';
import Pagination from 'react-js-pagination';
import {UserReviews} from '../UserReviews/UserReviews.jsx';

class UserReviewPagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelData: ['empty'],
      activePage: 1,
      filtered: ['empty']
    };

    this.filtered = [];
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.filtered = [];
      for (let i = 0; i < this.state.hotelData.length; i++) {
        if (this.props.filter.ExcellentChecked === true && this.state.hotelData[i].overAllRating === 5) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.GoodChecked === true && this.state.hotelData[i].overAllRating === 4) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.AverageChecked === true && this.state.hotelData[i].overAllRating === 3) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.PoorChecked === true && this.state.hotelData[i].overAllRating === 2) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.TerribleChecked === true && this.state.hotelData[i].overAllRating === 1) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.FamiliesChecked === true && this.state.hotelData[i].travelerType === 'Family') {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.CouplesChecked === true && this.state.hotelData[i].travelerType === 'Couples') {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.BusinessChecked === true && this.state.hotelData[i].travelerType === 'Business') {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.FriendsChecked === true && this.state.hotelData[i].travelerType === 'Friends') {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SoloChecked === true && this.state.hotelData[i].travelerType === 'Solo') {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.MarMayChecked === true && this.state.hotelData[i].dateOfStay.includes('March')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.MarMayChecked === true && this.state.hotelData[i].dateOfStay.includes('April')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.MarMayChecked === true && this.state.hotelData[i].dateOfStay.includes('May')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.JunAugChecked === true && this.state.hotelData[i].dateOfStay.includes('June')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.JunAugChecked === true && this.state.hotelData[i].dateOfStay.includes('July')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.JunAugChecked === true && this.state.hotelData[i].dateOfStay.includes('August')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SepNovChecked === true && this.state.hotelData[i].dateOfStay.includes('September')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SepNovChecked === true && this.state.hotelData[i].dateOfStay.includes('October')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SepNovChecked === true && this.state.hotelData[i].dateOfStay.includes('November')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.DecFebChecked === true && this.state.hotelData[i].dateOfStay.includes('December')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.DecFebChecked === true && this.state.hotelData[i].dateOfStay.includes('January')) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.DecFebChecked === true && this.state.hotelData[i].dateOfStay.includes('February')) {
          this.filtered.push(this.state.hotelData[i]);
        }
      }

      if (Object.values(this.filtered).every((value) => {
        return value === false;
      })) {
        this.setState({
          activePage: 1,
          filtered: this.state.hotelData
        });
      } else {
        this.setState({
          activePage: 1,
          filtered: this.filtered
        });
      }
    }
  }

  componentWillMount() {
    $.get({
      url: `http://localhost:3000/hotels/${this.props.hotelItem}/reviews`
    }).then((hotelData => {
      this.setState({
        hotelData: hotelData,
        activePage: 1,
        filtered: hotelData
      });
    }));
  }


  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
        <div>
          <UserReviews hotelData={this.state.filtered} activePage={this.state.activePage}/>
        </div>
        <Pagination
          hideFirstLastPages={true}
          prevPageText='Previous'
          nextPageText='Next'
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={this.state.filtered.length}
          pageRangeDisplayed={7}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default UserReviewPagination;
