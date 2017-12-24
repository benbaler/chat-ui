import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export const Message = ({avatar='',name='Ben', date=new Date().toString(), text='Blah Blah!'}) => (
	<Card>
    <CardHeader
      title={name}
      subtitle={date}
      avatar={avatar}
    />
    <CardText>
      {text}
    </CardText>
  </Card>
)