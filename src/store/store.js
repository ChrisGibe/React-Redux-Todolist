import {createStore, combineReducers} from "redux";
import { saveState } from './localStorage/localStorage'
import { filterReducer } from "./filters/filterReducer";
import todosReducer from './todos/todosReducer'

/**
 * Insert all the reducer inside the method "createStore"
 * "combinReducers" is here for add more than one reducer
 */
const store =  createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  }),
  // Add this line to use the Google extension "Redux Devtools"
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState())
})

export default store
