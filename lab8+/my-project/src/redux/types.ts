import { Action } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface IncrementAction extends Action {
  type: typeof INCREMENT;
}

export interface DecrementAction extends Action {
  type: typeof DECREMENT;
}

export interface ResetAction extends Action {
  type: typeof RESET;
}

export type CounterActionTypes = IncrementAction | DecrementAction | ResetAction;

export interface CounterState {
  count: number;
}