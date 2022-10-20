import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import theme_reducer from './redusers/theme_reduser';
import user_reducer from './redusers/user_reduser';
import { combineReducers } from 'redux';
import { watcherUser } from './action_creators/user_action_creators';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherUser()
  ])
}
export default createStore(combineReducers({
  theme: theme_reducer,
  user: user_reducer
}), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);