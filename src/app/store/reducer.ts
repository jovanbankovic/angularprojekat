import { ActionsUnion, ActionTypes } from './action';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { MusicItem } from '../models/music-item.model';
export const initialState = { items: [], cart: [] };

export function ShopReducer(state = initialState, action: ActionsUnion)
{
    switch(action.type)
    {
        case ActionTypes.LoadSuccess:
            return { ...state, items: [...action.payload ]};
        case ActionTypes.Add:
            console.log(action.payload);
            return { ...state, cart: [...state.cart, action.payload ]};
        case ActionTypes.Remove:
            return { ...state, cart: [...state.cart.filter(item => item.name !== action.payload.name )]};
        default:
            return state;
    }
}

export interface MusicItemState extends EntityState<MusicItem> {
    numberOfExercises: number;
  }

  export const musicAdapter: EntityAdapter<MusicItem> = createEntityAdapter<
  MusicItem
>({
  selectId: (item: MusicItem) => item.id
});