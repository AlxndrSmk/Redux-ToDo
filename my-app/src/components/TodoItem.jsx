const TodoItem = ({
  id,
  text,
  isCompleted,
  toggleIsTodoComplete,
  deleteTodo,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleIsTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => deleteTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
