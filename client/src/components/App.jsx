import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      update: 'text will change if button works',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.get({
      url: `http://localhost:3000/hotels/${this.props.hotelItem}/reviews`
    });
    // fetch('/text')
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((updated) => {
    //     return JSON.stringify(updated);
    //   })
    //   .then((string) => {
    //     console.log(string);
    //     this.setState({
    //       updated: string
    //     });
    //   });
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = {
      text: this.state.text
    };
    fetch('/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
  }


  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h1>Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Text
            <input name="text" value={this.state.text} onChange={this.handleChange}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

