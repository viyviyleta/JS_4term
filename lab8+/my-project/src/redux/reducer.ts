import { CounterState, CounterActionTypes, INCREMENT, DECREMENT, RESET } from './types';

const initialState: CounterState = {
  count: 0
};

const counterReducer = (state = initialState, action: CounterActionTypes): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counterReducer;