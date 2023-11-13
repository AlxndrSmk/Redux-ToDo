import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleIsTodoComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleIsTodoComplete={toggleIsTodoComplete}
          deleteTodo={deleteTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
