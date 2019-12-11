import { takeLatest, takeEvery, take, put, call } from 'redux-saga/effects';
import {
  SEND_MESSAGE,
  LOAD_MESSAGES_SUCCESS,
  LISTEN_TO_SERVER,
 } from '../actions';
import {
  connectToServer,
  createSocketChannel,
  emitMessage,
} from '../request';

// @sockets: listens to the socket and puts the new data into the reducer
function* listenToServer() {
  console.log("trying to connet");
  try{
    // connect to the server
    console.log("connecting server");
    const socket = yield call(connectToServer);
    // then create a socket channel
    const socketChannel = yield call(createSocketChannel, socket);
    // then put the new data into the reducer
    while(true){
      const messages = yield take(socketChannel);
      
      yield put({type: LOAD_MESSAGES_SUCCESS, messages});
    }
  } catch(error) {
    console.log(error);
  }
}

// @sockets: sends a message to the server
function* sendMessage(action){
  const message = action.message
  try{
    // send the message
    yield call(emitMessage, message);

  } catch(error) {
    console.log('SEND MESSAGE SAGA ERROR: ', error);
  }
}

// root messenger sagas exports
const messengerSagas = [
 
  takeEvery(LISTEN_TO_SERVER, listenToServer)
]

export default messengerSagas;