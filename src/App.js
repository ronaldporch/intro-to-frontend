import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:9000/todo")
      .then(({ data }) => setTodoItems(data));
  }, []);
  const updateNewTodo = (e) => setNewTodo(e.target.value);
  const addTodo = () => {
    axios
      .post("http://localhost:9000/todo", { text: newTodo })
      .then(({ data }) => {
        setTodoItems([...todoItems, data]);
        setNewTodo("");
      });
  };
  const finishTodoItem = (id) =>
    axios
      .put(`http://localhost:9000/todo/${id}`)
      .then(() =>
        setTodoItems(
          todoItems.map((todoItem) =>
            todoItem.id === id ? { ...todoItem, active: false } : todoItem
          )
        )
      );
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {todoItems.map((todoItem) => (
            <li
              style={{
                textDecoration: !todoItem.active ? "line-through" : "initial",
              }}
              key={todoItem.id}
              onClick={() => finishTodoItem(todoItem.id)}
            >
              {todoItem.text}
            </li>
          ))}
        </ul>
        <input value={newTodo} onChange={updateNewTodo} />
        <button onClick={addTodo}>Add</button>
      </header>
    </div>
  );
};

export default App;
