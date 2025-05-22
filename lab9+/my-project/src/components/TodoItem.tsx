import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, setEditingTodo } from '../redux/actions';
import { Todo } from '../redux/types';
import type { AppDispatch } from '../redux/store';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex items-center justify-between mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="mr-2 cursor-pointer"
      />
      <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      <div className="space-x-2">
        <button 
          onClick={() => dispatch(setEditingTodo(todo.id))} 
          className="text-green-400 cursor-pointer"
        >
          Edit
        </button>
        <button 
          onClick={() => dispatch(deleteTodo(todo.id))} 
          className="text-red-300 cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;