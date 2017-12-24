import React, { Component } from 'react';
import './Chat.css';

import MessageList from './MessageList';
import MessageComposer from './MessageComposer';

class Chat extends Component {
  render() {
    return (
      <div className="chat">
      	<MessageList messages={this.props.messages}/>
      	<MessageComposer avatar={''} name={'Ben'}/>
      </div>
    );
  }
}

export default Chat;