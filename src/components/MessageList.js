import React, { Component } from 'react';

import { Message } from './Message.js';

class MessageList extends Component {
  render() {
    return (
      <div>
      	{this.props.messages.map((message, i) =>
	  <Message key={i} {...message} />
	)}
      </div>
    );
  }
}

export default MessageList;