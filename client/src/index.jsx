import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/App/App.jsx';

//Choose hotel through parameters sent to App
ReactDOM.render(<App hotelItem={1} userID={1}/>, document.getElementById('reviews'));
