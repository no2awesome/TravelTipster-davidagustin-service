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
        if (this.props.filter.ExcellentChecked === true && this.state.hotelData[i].overAllRating === 5 && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.GoodChecked === true && this.state.hotelData[i].overAllRating === 4 && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.AverageChecked === true && this.state.hotelData[i].overAllRating === 3 && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.PoorChecked === true && this.state.hotelData[i].overAllRating === 2 && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.TerribleChecked === true && this.state.hotelData[i].overAllRating === 1 && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.FamiliesChecked === true && this.state.hotelData[i].travelerType === 'Family' && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.CouplesChecked === true && this.state.hotelData[i].travelerType === 'Couples' && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.BusinessChecked === true && this.state.hotelData[i].travelerType === 'Business' && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.FriendsChecked === true && this.state.hotelData[i].travelerType === 'Friends' && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SoloChecked === true && this.state.hotelData[i].travelerType === 'Solo' && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.MarMayChecked === true && this.state.hotelData[i].dateOfStay.includes('March') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.MarMayChecked === true && this.state.hotelData[i].dateOfStay.includes('April') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.MarMayChecked === true && this.state.hotelData[i].dateOfStay.includes('May') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.JunAugChecked === true && this.state.hotelData[i].dateOfStay.includes('June') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.JunAugChecked === true && this.state.hotelData[i].dateOfStay.includes('July') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.JunAugChecked === true && this.state.hotelData[i].dateOfStay.includes('August') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SepNovChecked === true && this.state.hotelData[i].dateOfStay.includes('September') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SepNovChecked === true && this.state.hotelData[i].dateOfStay.includes('October') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.SepNovChecked === true && this.state.hotelData[i].dateOfStay.includes('November') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.DecFebChecked === true && this.state.hotelData[i].dateOfStay.includes('December') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.DecFebChecked === true && this.state.hotelData[i].dateOfStay.includes('January') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        } else if (this.props.filter.DecFebChecked === true && this.state.hotelData[i].dateOfStay.includes('February') && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
          // If all criteria is unchecked, then filter all messages according to text
        } else if (!Object.values(this.props.filter).some((value) => {
          return value === true;
        }) && this.state.hotelData[i].message.includes(this.props.filter.searchReviewText)) {
          this.filtered.push(this.state.hotelData[i]);
        }
      }

      // If all boxes are unchecked and search box is empty, then view all user messages
      if (Object.values(this.props.filter).every((value) => {
        return value === '' || value === false;
      })) {
        this.setState({
          activePage: 1,
          filtered: this.state.hotelData
        });
        // If not, show messages according to criteria
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
