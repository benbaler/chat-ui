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

// Initial state with presaved data from local storage or just a sample data if not exists.
const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) : sampleData

const store = createStore(appReducer, initialState)

store.subscribe(() => console.log(store.getState()))

// Save the state after every change.
store.subscribe(() => 
    localStorage["redux-store"] = JSON.stringify(store.getState()))

// Generate a random avatar for each user if not exists.
store.getState().user.avatar || store.dispatch(setRandomAvatar())

const socket = io.connect('https://spotim-demo-chat-server.herokuapp.com');
// Listen to messages broadcast.
socket.on('spotim/chat', msg => {
  store.dispatch(addMessage(msg.avatar, msg.username, msg.date, msg.text))
});

class App extends Component {
  render() {
    return (
	    <MuiThemeProvider>
          <Provider store={store}>
            <SocketProvider socket={socket}>
    	    		<Chat />
            </SocketProvider>
          </Provider>
	    </MuiThemeProvider>
    )
  }
}

export default App
