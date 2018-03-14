import React from 'react';
import ReactDOM from 'react-dom';
 
const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'green' }, 'Mint Chocolate Chip'),
        React.createElement('li', { className: 'red' }, 'Strawberry')
      ]
    )
  );
 
ReactDOM.render(
  list,
  document.getElementById('global')
);