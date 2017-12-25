import React, { Component } from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { socketConnect } from 'socket.io-react';

class MessageComposer extends Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}

  onSubmit = (e) =>  {
  	e.preventDefault()
  	const date = new Date().toString();
    this.props.onNewMessage({
    	username: this._username.getValue()
    })
    this.props.socket.emit('spotim/chat', {
    	avatar: this.props.avatar,
    	username: this._username.getValue(),
    	date: date,
    	text: this._message.getValue()
    })
  }

  render() {
		const {avatar, username, message, onNewMessage} = this.props
	  return (
	  	<form onSubmit={this.onSubmit}>
				<Card>
			    <CardHeader
			      title={username}
			      avatar={avatar}
			    />
			   	<CardText>
				  	<TextField floatingLabelText="Enter username"
				  						 defaultValue={username}
				  						 fullWidth={true}
				  						 ref={input => this._username = input}
				  						 required />
					  <TextField floatingLabelText="Enter message"
					  					 fullWidth={true}
					  					 multiLine={true}
					  					 ref={input => this._message = input}
					  					 required />
			    </CardText>
			    <CardActions>
			    	<RaisedButton label="Send" type="submit" />
		    	</CardActions>
		  	</Card>
	  	</form>
	  )
	}
}

export default socketConnect(MessageComposer)