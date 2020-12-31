import { createSelector } from "reselect";
import { filterSelector } from "../filters/filterSelectors";

export const todosSelector = ({ todos }) => todos;

/**
 * Filter the list
 * 
 * We are using "reselect" for render the components ONLY if one of 
 * the two value (todosSelector or filterSelector) have changed
 * 
 * @returns if the filter === null, he will return all the todos
 * else return return all list of todos who are competed or not
 * (depends of the value of the filter)
 */
export const filteredTodosSelector = createSelector(todosSelector, filterSelector, (todos, filter) => {
  if (filter === null) {
    return todos;
  }

  return todos.filter((todo) => todo.completed === filter);
});
