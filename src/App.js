import { Provider } from "react-redux";
import store from "./store/store";
import { TodoListStore } from "./components/TodoList";
import { TodoFilterStore } from "./components/TodoFilter";

import "./App.css";
import { AddTodoForm } from "./components/AddTodoForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List<span>React et Redux</span></h1>
        <TodoFilterStore />
        <AddTodoForm />
        <TodoListStore />
      </div>
    </Provider>
  );
}

export default App;
