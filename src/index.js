import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'Hello, World! My First React Code');

const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'red' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    )
  );

const container = React.createElement('div', {}, [title, paragraph, list]);

ReactDOM.render(
  container,
  document.getElementById('root')
);
