import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodoAction, deleteTodoAction, toggleTodoAction } from "../store/todos/todosActions";
import { filteredTodosSelector } from "../store/todos/todosSelectors";

import trash from "../images/baseline_delete.png";

import EditableLabel from "react-editable-label";

/**
 * Create a Li element for a todo
 * All the function will be receved from the parent TodoList
 * @param {object} todo A todo
 * @param {function} onEdit To edit the todo
 * @param {function} onToggle To change to completed or not
 * @param {function} onDelete To delete the todo
 * @returns {object} A Li element
 */
function TodoItem({ todo, onEdit, onToggle, onDelete }) {
  return (
    <li>
      <EditableLabel
        className="form-check-label"
        initialValue={todo.title}
        inputClass="test"
        save={(value) => {
          todo.title = value;
          onEdit(todo);
        }}
      />
      <input id="flexCheckDefault" type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
      <button className="btn-delete" type="button" onClick={() => onDelete(todo)}>
        <img alt="supprimer todo" src={trash} />
      </button>
    </li>
  );
}

/**
 * Create an Ul element whith all our todos
 * The Todolist will dispatch all the function to the children (TodoItem)
 * @param {array} todos All the todos
 * @param {function} onEdit To edit the todo
 * @param {function} onToggle To change to completed or not
 * @param {function} onDelete To delete the todo
 * @returns {object} An Ul element with all the Li
 */
export default function Todolist({ todos, onEdit, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onEdit={onEdit} onToggle={onToggle} onDelete={onDelete} key={todo.id} />
      ))}
    </ul>
  );
}

/**
 * Dispatch all the actions from todosActions.js file inside our
 * Todolist element
 */
export function TodoListStore() {
  const todos = useSelector(filteredTodosSelector);
  const dispatch = useDispatch();
  const onEdit = useCallback((todo) => {
    dispatch(editTodoAction(todo));
  }, [dispatch]);
  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo));
  }, [dispatch]);
  const onDelete = useCallback((todo) => {
    dispatch(deleteTodoAction(todo));
  }, [dispatch]);
  return <Todolist todos={todos} onEdit={onEdit} onToggle={onToggle} onDelete={onDelete} />;
}
