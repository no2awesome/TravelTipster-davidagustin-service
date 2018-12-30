import React from 'react';

const TravelerType = (props) => {
  return (
    <div>
      <p><b>Traveler Type</b></p>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Families
        </label>
      </div>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Couples
        </label>
      </div>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Business
        </label>
      </div>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Friends
        </label>
      </div>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Terrible
        </label>
      </div>
    </div>
  );
};

export default TravelerType;
