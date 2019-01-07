import React from 'react';
import styles from './User.css';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.userInfo}>
        <img className={styles.userImage} src={this.props.userImage}/>
        <div className={styles.userName}>{this.props.userName}</div>
      </div>
    );
  }
}

export default User;


