import React from 'react';
import styles from "../ReplyUser/ReplyUser.css";

const ReplyUserMessage = (props) => {
  let replyMessage;
  if (props.replyMessage !== null) {
    replyMessage = (
      <p>{props.replyMessage}</p>
    );
  }
  return (
    <div>
      <p>{replyMessage}</p>
    </div>
  );
};

export default ReplyUserMessage;
