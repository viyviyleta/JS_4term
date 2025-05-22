import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { toggleTodo, deleteTodo, startEditTodo } from '../features/todos/todoSlice';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ol className="list-decimal pl-5">
      {todos.map((todo, index) => (
        <li key={todo.id} className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="mr-2 cursor-pointer"
            />
            <span className={todo.completed ? 'line-through text-gray-400' : ''}>
              {todo.text}
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => dispatch(startEditTodo(todo.id))}
              className="text-green-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
