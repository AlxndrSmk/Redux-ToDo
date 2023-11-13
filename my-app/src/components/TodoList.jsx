import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleIsTodoCompleted, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleIsTodoCompleted={toggleIsTodoCompleted}
          deleteTodo={deleteTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
