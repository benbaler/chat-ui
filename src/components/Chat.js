import React, { Component } from 'react'
import './Chat.css'

import MessageList from '../containers/MessageList'
import MessageComposer from '../containers/MessageComposer'

class Chat extends Component {
  render() {
    return (
    	<div className="chat">
      	<MessageList />
      	<MessageComposer />
      </div>
    );
  }
}

export default Chat