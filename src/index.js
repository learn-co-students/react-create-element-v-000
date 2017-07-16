import React from 'react';
import ReactDOM from 'react-dom';

// Code goes here
// Main
const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
const container = React.createElement('div', {}, [title, paragraph]);

ReactDOM.render(
  container,
  document.getElementById('main')
);

// list
const list = React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
        [
            React.createElement('li', { className: 'pink' }, 'Strawberry Cheesecake'),
            React.createElement('li', { className: 'icecream' }, 'Neopolitan'),
            React.createElement('li', { className: 'brown' }, 'Chocolate'),
            React.createElement('li', { className: 'white' }, 'Vanilla'),
        ]
    )
);

ReactDOM.render(
    list,
    document.getElementById('root')
);