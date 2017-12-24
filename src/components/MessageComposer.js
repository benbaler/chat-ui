import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class MessageComposer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      userName: '',
    };

    this.updateName = this.updateName.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  updateName() {
    this.setState({userName: ''});
  }

  sendMessage() {
    this.setState({messageText: ''});
  }

  render() {
    return (
    	<Card>
		    <CardHeader
		      title={this.props.name}
		      subtitle={(new Date().toString())}
		      avatar={this.props.avatar}
		    />
		   	<CardText>
			  	<TextField floatingLabelText="Enter your name" onChange={this.updateName} defaultValue={this.props.name} fullWidth={true} required />
				  <TextField floatingLabelText="Enter message" multiLine={true} fullWidth={true} required />
		    </CardText>
		    <CardActions>
		    	<RaisedButton label="Send" onClick={this.sendMessage} />
	    	</CardActions>
		  </Card>
    );
  }
}

export default MessageComposer;