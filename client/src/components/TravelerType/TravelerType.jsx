import React from 'react';

class TravelerType extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FamiliesChecked: false,
      CouplesChecked: false,
      BusinessChecked: false,
      FriendsChecked: false,
      TerribleChecked: false
    };
  }

  render() {
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
  }
}


export default TravelerType;
