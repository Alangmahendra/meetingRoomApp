import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers/indexReducers'

export default createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)