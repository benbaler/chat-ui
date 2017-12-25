import MessageList from '../components/MessageList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		username: state.user.username,
		messages: state.messages
	}
}

const Container = connect(mapStateToProps)(MessageList)

export default Container