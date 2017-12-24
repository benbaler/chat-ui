import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chat from './components/Chat';
import './App.css';

class App extends Component {
	constructor(props){
    super(props);
    this.state = { 
    	messages: [
  			{
  				name: 'Ben',
  				avatar: '',
  				text: 'Blah Blah!',
  				date: (new Date().toString())
  			},
  			{
  				name: 'Oded',
  				avatar: '',
  				text: 'Blah Blah!',
  				date: (new Date().toString())
  			},
  			{
  				name: 'Tsvika',
  				avatar: '',
  				text: 'Blah Blah!',
  				date: (new Date().toString())
  			}
  		]
  	};
  }
  render() {
    return (
    	<MuiThemeProvider>
      	<Chat messages={this.state.messages}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
