import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, cancelEdit } from '../features/todos/todoSlice';
import { AppDispatch, RootState } from '../app/store';

const TodoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const editingTodo = todos.find(todo => todo.isEditing);

  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    } else {
      setText('');
    }
  }, [editingTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      if (editingTodo) {
        dispatch(updateTodo({ id: editingTodo.id, text }));
      } else {
        dispatch(addTodo(text));
      }
      setText('');
    }
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Add a task"
      />
      <button
        type="submit"
        className={`${editingTodo ? 'bg-green-500' : 'bg-pink-500'} text-white p-2 rounded`}
      >
        {editingTodo ? 'Save' : 'Add'}
      </button>
      {editingTodo && (
        <button type="button" onClick={handleCancel} className="bg-gray-500 text-white p-2 rounded">
        </button>
      )}
    </form>
  );
};

export default TodoForm;
