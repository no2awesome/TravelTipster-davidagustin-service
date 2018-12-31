import React from 'react';

const TotalReviews = (props) => {
  return (
    <div>
      <div>
        Reviews Icon Goes Here
      </div>
      <div>
        {props.total}(Total Reviews)
      </div>
      <div>
        Reviews Tab
      </div>
    </div>
  );
};

export default TotalReviews;

