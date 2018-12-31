import React from 'react';

class TimeOfYear extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MarMayChecked: false,
      JunAugChecked: false,
      SepNovChecked: false,
      DecFebChecked: false
    };
  }

  render() {
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
  }
}

export default TimeOfYear;
