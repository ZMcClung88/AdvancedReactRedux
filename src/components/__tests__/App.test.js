import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.create('div');

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is in there

  ReactDom.unmountComponentAtNode(div);
});
