import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions';
import { CounterState } from '../redux/types';
import Button from './Button';

const Counter: React.FC = () => {
  const count = useSelector((state: CounterState) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-cente">
      <div className="flex flex-col items-center justify-center p-8 bg-pink-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Counter: {count}</h2>
  
        <div className="flex space-x-4">
          <Button
            onClick={() => dispatch(increment())}
            label="Increment (+)"
          />
          <Button
            onClick={() => dispatch(decrement())}
            label="Decrement (–)"
          />
          <Button
            onClick={() => dispatch(reset())}
            label="Reset"
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;