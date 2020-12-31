import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todos/todosActions";

/**
 * 
 */
export function AddTodoForm() {
  const dispatch = useDispatch();
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(input.current.value));
    input.current.value = "";
    input.current.focus();
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="" ref={input}></input>
        <button className="btn-add">Ajouter</button>
      </form>
    </div>
  );
}
