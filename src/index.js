// Code goes here
// Import the React library
import React from 'react';
// Import ReactDOM.render() from React Dom library
import ReactDOM from 'react-dom';

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    )
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);
