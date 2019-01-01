import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.userImage}/>
        <p>{this.props.userName} wrote a review</p>
        <p>{this.props.hotelName}</p>
        <p>{this.props.datePosted}</p>
      </div>
    );
  }
}

export default User;


