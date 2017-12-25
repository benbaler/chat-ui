import C from './constants'

const avatars = [
	'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png',
	'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png',
	'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png',
	'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png',
	'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png'
]

export function addMessage(avatar, username, date, message) {
	return {
		type: C.ADD_MESSAGE,
		payload: {avatar, username, date, message}
	}
}

export function setRandomAvatar() {
	let avatar = avatars[Math.floor(Math.random() * avatars.length)]
	return {
		type: C.SET_AVATAR,
		payload: avatar
	}
}

export function setUsername(username) {
	return {
		type: C.SET_USERNAME,
		payload: username
	}
}

export function setMessage(message) {
	return {
		type: C.SET_MESSAGE,
		payload: message
	}
}

export function clearMessage() {
	return {
		type: C.CLEAR_MESSAGE,
		payload: ''
	}
}