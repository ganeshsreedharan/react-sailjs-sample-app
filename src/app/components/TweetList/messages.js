import { connect } from 'react-redux'
import Tweet from '../Tweet/Tweet'
import { listenToServer } from '../../redux/actions'

const mapStateToProps = (state) => {
  return {
    fetching: state.socketNetwork.fetching,
    data: state.socketNetwork.messages,
    error: state.socketNetwork.error,
    messages: state.socketNetwork.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(listenToServer());
    }
  }
}

const Messages = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tweet);

export default Messages;