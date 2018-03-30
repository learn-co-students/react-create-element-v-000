// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

// const title = React.createElement('h1', {}, 'My First React Code');
// const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!')
// const container = React.createElement('div', {id: "parentDiv"}, [title, paragraph]);

const list = React.createElement('div', {},
  React.createElement('h1', {}, 'My favorite ice cream flavors'),
  React.createElement('ul', {},
    [
      React.createElement('li', {class: 'brown'}, 'Chocolate'),
      React.createElement('li', {class: 'white'}, 'Vanilla'),
      React.createElement('li', {class: 'pink'}, 'Strawberry')
    ]
  )
);

ReactDOM.render(
  // container,
  list,
  document.getElementById("global")
)
