import React from 'react';

class ReplyUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let replier;
    if (this.props.replierName !== null) {
      replier = (
        <div>
          <p>Response from {this.props.replierName}, {this.props.position} at {this.props.hotelName}</p>
          <img src={this.props.replierImage} alt='replierImage'/>
          <p>Responded {this.props.timeReplied}</p>
        </div>
      );
    }
    return (
      <div>
        {replier}
      </div>
    );
  }
}

export default ReplyUser;
