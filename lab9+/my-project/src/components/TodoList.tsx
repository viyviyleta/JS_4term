import { useSelector } from 'react-redux';
import { TodoState } from '../redux/types';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state: TodoState) => state.todos);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;