import C from '../constants'
import { combineReducers } from 'redux'

export const avatar = (state='', action) =>
	(action.type === C.SET_AVATAR) ? action.payload :  state

export const username = (state='', action) =>
	(action.type === C.SET_USERNAME) ? action.payload :  state

export const message = (state='', action) => {
	switch (action.type) {
		case C.CLEAR_MESSAGE :
		case C.SET_MESSAGE :
			return action.payload
		default :
			return state
	}
}

export const messages = (state={}, action) => {
	switch (action.type) {
		case C.ADD_MESSAGE :
			return [
				...state,
				action.payload
			]
		default :
		 return state
	}
}

export default combineReducers({
	user: combineReducers({
		avatar,
		username,
		message
	}),
	messages
})