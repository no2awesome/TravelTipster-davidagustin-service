import React from 'react';
import ReplyUser from '../ReplyUser/ReplyUser.jsx';
import ReplyUserMessage from '../ReplyUserMessage/ReplyUserMessage.jsx';
import User from '../User/User.jsx';
import UserMessage from '../UserMessage/UserMessage.jsx';

export class UserReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <User/>
          <UserMessage/>
        </div>
        <div>
          <ReplyUser/>
          <ReplyUserMessage/>
        </div>
      </div>
    );
  }
}
