// Code goes here
// Import the React library
import React from 'react';
// Import ReactDOM.render() from React Dom library
import ReactDOM from 'react-dom';

// Create our first element
//const title = React.createElement('h1', {}, 'My First React Code');
// Create a sibling
//const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
// Create a container
//const container = React.createElement('div', {}, [title, paragraph]);

// Render React element
//ReactDOM.render(
//  container,
//  document.getElementById('global')
//);

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
