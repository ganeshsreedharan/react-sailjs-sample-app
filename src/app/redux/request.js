import { eventChannel } from 'redux-saga'
import io from 'socket.io-client';
let socket;//= io();

export const emitMessage = (message) => {
  return new Promise( (resolve) => {
     socket.emit('post/message', message, 'web', () => {
       resolve(socket);
     })
  });
}

export const connectToServer = () => {
  socket= io();
  // wrap the connection in a promise (to allow error dispatching)
  console.log('connecting to server');
  return new Promise( (resolve) => {
    // on connection resolve the promise
    socket.on('connect', () => {
      console.log('connected to server');
      resolve(socket);
    });
  });
};

// Channel - queues events comming in from the server
export const createSocketChannel = socket => eventChannel( (emit) => {
  const handler = (data) => {
    console.log(data);
    emit(data);
  }
  // listen to task
  socket.on('tweets-channel', handler );
  return () => {
      // stop listning to those task
      socket.off('tweets-channel', handler );
  }
});