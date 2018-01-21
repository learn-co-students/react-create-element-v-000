import React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
  React.createElement('div', { className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', {className: 'my-interests'},
      [
        React.createElement('li', { className: 'my-interests'}, 'JavaScript'),
        React.createElement('li', { className: 'my-interests'}, 'React'),
        React.createElement('li', { className: 'my-interests'}, 'Movies'),
        React.createElement('li', { className: 'my-interests'}, 'Ice cream')
        
      ]

  )
);

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
