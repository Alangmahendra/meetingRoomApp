import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export default createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)