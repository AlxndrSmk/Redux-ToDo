const TodoItem = ({
  id,
  text,
  isCompleted,
  toggleIsTodoCompleted,
  deleteTodo,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleIsTodoCompleted(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => deleteTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
