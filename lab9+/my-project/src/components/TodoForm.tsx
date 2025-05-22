import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '../redux/actions';
import type { AppDispatch } from '../redux/store';
import { TodoState } from '../redux/types';

const TodoForm = () => {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: TodoState) => state.todos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      if (editingId) {
        dispatch(editTodo(editingId, text));
        setEditingId(null);
      } else {
        dispatch(addTodo(text));
      }
      setText('');
    }
  };

  useEffect(() => {
    const editingTodo = todos.find(todo => todo.isEditing);
    if (editingTodo) {
      setText(editingTodo.text);
      setEditingId(editingTodo.id);
    } else {
      setText('');
      setEditingId(null);
    }
  }, [todos]);

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder={editingId ? "Edit a task" : "Add a task"}
      />
      <button 
        type="submit" 
        className={`${editingId ? 'bg-green-500' : 'bg-pink-500'} text-white p-2 rounded cursor-pointer`}
      >
        {editingId ? 'Save' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;