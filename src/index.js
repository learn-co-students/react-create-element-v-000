// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'My first React Code');

ReactDOM.render(
  title,
  document.getElementById('global')
);