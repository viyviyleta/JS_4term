import { INCREMENT, DECREMENT, RESET } from './types';

export const increment = () => ({
  type: INCREMENT,
} as const);

export const decrement = () => ({
  type: DECREMENT,
} as const);

export const reset = () => ({
  type: RESET,
} as const);
