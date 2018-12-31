import React from 'react';
import $ from 'jquery';
import Pagination from 'react-js-pagination';
import {UserReviews} from '../UserReviews/UserReviews.jsx';

class UserReviewPagination extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      hotelData: ['empty'],
      activePage: 1
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    $.get({
      url: `http://localhost:3000/hotels/${this.props.hotelItem}/reviews`
    }).then((hotelData => {
      this.setState({
        hotelData: hotelData,
        activePage: 1
      });
    }));

  }

  handlePageChange(pageNumber) {
    console.log('Page number: ', pageNumber);
    this.setState({activePage: pageNumber});
  }

  render(){

    return(
      <div>
        <div>
          <UserReviews hotelData={this.state.hotelData} />
        </div>
        <Pagination
          hideFirstLastPages={true}
          prevPageText='Previous'
          nextPageText='Next'
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={this.props.total}
          pageRangeDisplayed={7}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default UserReviewPagination;
