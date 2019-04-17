// Code goes here

import React from 'react';
import ReactDOM from 'react-dom';


// const title = React.createElement('h1', {}, 'My First React Code');
// const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
// const container = React.createElement('div', {}, [title, paragraph]);
//
// ReactDOM.render(
//   container,
//   document.getElementById('global')
// );

const list =
  React.createElement('div', {},
    React.createElement('hi', {}, 'My fav ice cream flavors:'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'brown' }, 'Almond'),
        React.createElement('li', { className: 'green' }, 'Mint'),
      ]
    )
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);
