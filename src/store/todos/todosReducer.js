import { loadState } from "../localStorage/localStorage";

export const initialState = loadState();

// The differents actions for the todolist
export const ADD_TODO_ACTION = "ADD_TOTO_ACTION";
export const EDIT_TODO_ACTION = "EDIT_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";

/**
 * Reducer for execute the differents actions
 * @param {[Object]} state The Global state
 * @param {Object} action Action with the 'type' and the 'payload'
 * @returns {(Array|Object)} If action.type === UPDATE_TODO_ACTION return new todo updated, else return the state
 */
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: new Date().getTime(), completed: false, ...action.payload }];
    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
    case EDIT_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
