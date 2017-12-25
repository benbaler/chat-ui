import React, { Component } from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { socketConnect } from 'socket.io-react';
import './MessageComposer.css';

class MessageComposer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: props.message
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

  onSubmit = (e) =>  {
  	e.preventDefault()
  	const date = new Date().toString();
  	// This used to save the messages localy but now we used it only to update username and to clear the message field.
    this.props.onNewMessage({
    	username: this._username.getValue()
    })
    // Broadcast the new message.
    this.props.socket.emit('spotim/chat', {
    	avatar: this.props.avatar,
    	username: this._username.getValue(),
    	date: date,
    	text: this.state.message
    })

    // Clear message.
    this.setState({message: ''});
  }

  handleChange = (e) => {
  	this.setState({message: e.target.value});
  }

  render() {
		const {avatar, username} = this.props
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
					  					 value={this.state.message}
					  					 onChange={this.handleChange}
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