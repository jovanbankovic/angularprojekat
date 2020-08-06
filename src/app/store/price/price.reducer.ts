import { Action, createReducer, on } from '@ngrx/store';
import * as PriceActions from './price.action';

export const initialPrice = 0;

// tslint:disable-next-line:variable-name
const _priceReducer = createReducer(
  initialPrice,
  on(PriceActions.addToPrice, (state, action) => state + action.price),
  on(PriceActions.removeFromPrice, (state, action) => {
    return state - action.price;
  })
);

// tslint:disable-next-line:no-shadowed-variable
export function priceReducer(initialPrice = 0, action: Action): any {
  return _priceReducer(initialPrice, action);
}
