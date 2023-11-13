import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

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

  const toggleIsTodoCompleted = (todoId) => {
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
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleIsTodoCompleted={toggleIsTodoCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
