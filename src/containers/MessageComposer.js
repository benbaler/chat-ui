import MessageComposer from '../components/MessageComposer'
import { connect } from 'react-redux'
import { setUsername } from '../actions'

const mapStateToProps = (state) => {
	return {
		avatar: state.user.avatar,
		username: state.user.username,
		message: state.user.message
	}
}

// Add this dispach functions to the props of the component.
const mapDispatchToProps = dispatch => ({
	onNewMessage({username}) {
		dispatch(
			setUsername(username)
		)
	}
})

const Container = connect(mapStateToProps, mapDispatchToProps)(MessageComposer)

export default Container