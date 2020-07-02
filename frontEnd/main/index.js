import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview.jsx'
import App from './Main.jsx';
import Specs from './Specifications.jsx'

ReactDOM.render(<Overview/>, document.getElementById('Overview'));
ReactDOM.render(<Specs />, document.getElementById('specs'));
ReactDOM.render(<App />, document.getElementById('Review'));



