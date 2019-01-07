import React from 'react';
import styles from './ReplyUser.css';

class ReplyUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let replier;
    if (this.props.replierName !== null) {
      replier = (
        <div className={styles.replyUser}>
          <p>Response from {this.props.replierName}, {this.props.position} at {this.props.hotelName}</p>
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
