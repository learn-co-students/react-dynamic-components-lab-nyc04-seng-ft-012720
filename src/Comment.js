//your code here
import React, { Component } from 'react';

export default class Comment extends Component {

  render() {
    const ourText = this.props.commentText


    return (
      <div className="comment">
        {ourText}
      </div>
    )
  }

}