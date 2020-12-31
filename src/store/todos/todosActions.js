import { ADD_TODO_ACTION, EDIT_TODO_ACTION, DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from "./todosReducer";

/**
 * All of these actions are responsible for 
 * converting our elements into an action.
 */


/**
 * Action for add a new todo
 * @param {String} title The name of the todo
 */
export const addTodoAction = (title) => ({
    type: ADD_TODO_ACTION,
    payload: {title}
})

/**
 * Action for update a new todo
 * @param {Object} todo The todo who will be edited
 */
export const editTodoAction = (todo) => ({
    type: EDIT_TODO_ACTION,
    payload: {...todo, title: todo.title}
})

/**
 * Action for update a new todo
 * @param {Object} todo The todo who will be updated
 */
export const toggleTodoAction = (todo) => ({
    type: UPDATE_TODO_ACTION,
    payload: {...todo, completed: !todo.completed}
})

/**
 * Action for delete a new todo
 * @param {Object} todo The todo who will be delete
 */
export const deleteTodoAction = (todo) => ({
    type: DELETE_TODO_ACTION,
    payload: todo.id
})