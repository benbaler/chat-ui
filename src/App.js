import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Chat from './components/Chat'
import './App.css'

import sampleData from './initialState'
import appReducer from './store/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { setRandomAvatar, addMessage } from './actions'
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) : sampleData

const store = createStore(appReducer, initialState)

store.subscribe(() => console.log(store.getState()))

store.subscribe(() => 
    localStorage["redux-store"] = JSON.stringify(store.getState()))

store.getState().user.avatar || store.dispatch(setRandomAvatar())

const socket = io.connect('https://spotim-demo-chat-server.herokuapp.com');

socket.on('spotim/chat', msg => {
  store.dispatch(addMessage(msg.avatar, msg.username, msg.date, msg.text))
});

class App extends Component {
  render() {
    return (
    	<SocketProvider socket={socket}>
	    	<MuiThemeProvider>
	    		<Provider store={store}>
	    			<Chat />
	    		</Provider>
	      </MuiThemeProvider>
      </SocketProvider>
    )
  }
}

export default App
