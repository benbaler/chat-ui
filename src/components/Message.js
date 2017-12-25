import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import './Message.css'

export const Message = ({avatar,
												 username,
												 date,
												 message,
												 highlightMessage}) => (
	<Card className={highlightMessage ? 'highlight-message' : ''}>
    <CardHeader
      avatar={avatar}
      title={username}
      subtitle={date}
    />
    <CardText>
      {message}
    </CardText>
  </Card>
)