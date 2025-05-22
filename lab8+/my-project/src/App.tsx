import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';
import './style.css'

function App() {
  
  return (
    <Provider store={store}>
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Redux Counter</h1>
        <Counter />
      </div>
    </div>
  </Provider>
  
  );
}

export default App;