import React, { Component } from 'react';
import PostButton from '../containers/post_data';
import PostRender from '../containers/post_render';

export default class App extends Component {
  render() {
    return (
      <div>
      		<PostButton />
      		<PostRender />
      </div>
    );
  }
}
