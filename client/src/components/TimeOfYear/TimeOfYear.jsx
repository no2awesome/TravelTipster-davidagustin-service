import React from 'react';

const TimeOfYear = (props) => {
  return (
    <div>
      <p><b>Time of year</b></p>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Mar-May
        </label>
      </div>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Jun-Aug
        </label>
      </div>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Sep-Nov
        </label>
      </div>
      <div>
        <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"> </span>
          Dec-Feb
        </label>
      </div>
    </div>
  );
};

export default TimeOfYear;
