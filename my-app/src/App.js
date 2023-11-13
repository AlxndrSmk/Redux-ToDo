import { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          isCompleted: false,
        },
      ]);
      setText('');
    }
  };

  const toggleIsTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <label>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleIsTodoComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <span className="delete" onClick={() => deleteTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
