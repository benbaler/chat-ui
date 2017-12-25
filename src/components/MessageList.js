import React, { Component } from 'react'

import { Message } from './Message'

class MessageList extends Component {
  render() {
  	const { messages, username } = this.props 
    return (
      <div>
      	{messages.map((message, i) =>
	  <Message key={i} {...message} highlightMessage={username === message.username}/>
	)}
      </div>
    )
  }
}

export default MessageList