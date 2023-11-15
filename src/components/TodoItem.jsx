import { useDispatch } from 'react-redux';
import { removeTodo, toggleStatus } from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(removeTodo(id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
