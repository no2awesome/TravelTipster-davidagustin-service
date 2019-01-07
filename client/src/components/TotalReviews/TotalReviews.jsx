import React from 'react';
import styles from './TotalReviews.css';

const TotalReviews = (props) => {
  return (
    <div>
      <div className={styles.body}>
        <h1 className={styles.reviews}>Reviews <span className={styles.reviewsNumber}>({props.total})</span> </h1>
      </div>
    </div>
  );
};

export default TotalReviews;

