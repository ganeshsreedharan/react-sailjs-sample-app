import { all } from 'redux-saga/effects';
import messengerSagas from './saga';

// yield to all sagas
export default function* rootSaga(){
  yield all([messengerSagas]);
}