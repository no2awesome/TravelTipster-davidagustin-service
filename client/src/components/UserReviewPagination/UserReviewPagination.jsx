import React from 'react';
import $ from 'jquery';
import Pagination from 'react-js-pagination';

class UserReviewPagination extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      hotelData: ['empty']
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    $.get({
      url: `http://localhost:3000/hotels/${this.props.hotelItem}/reviews`
    }).then((hotelData => {
      this.setState({
        hotelData: hotelData,
        activePage: 15
      });
    }));

  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }


  render(){
    return(
      <div>
        <p>This is the Pagination Component</p>
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
  };

}

export default UserReviewPagination;
