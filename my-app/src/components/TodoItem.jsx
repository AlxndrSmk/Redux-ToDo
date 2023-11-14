import { useDispatch } from 'react-redux';
import { deleteTodo, toggleIsTodoCompleted } from '../store/todoSlice';

const TodoItem = ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(toggleIsTodoCompleted({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
