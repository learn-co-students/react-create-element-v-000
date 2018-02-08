import React from 'react';
import ReactDom from 'react-dom';

const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, 'Writing some more HTML code. Very cool stuff!');
const container = React.createElement('div', {}, [title, paragraph]);

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite coding languages'),
    React.createElement('ul', {},
    [
      React.createElement('li', { className: 'brown' }, 'Ruby'),
      React.createElement('li', { className: 'white' }, 'Rails'),
      React.createElement('li', { className: 'yellow' }, 'Javascript'),
    ]
  )
);

ReactDom.render(
  list,
  document.getElementById('global')
);
