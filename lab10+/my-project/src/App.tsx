import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-pink-100 text-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">To-do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
