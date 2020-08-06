import { createAction, props } from '@ngrx/store';
import { MusicItem, MusicItemInCart } from '../../models/music-item.model';

export const removeMusicItemFromCart = createAction(
  '[Removing from component] removeMusicItemFromCart',
  props<{ idOfMusicItemToRemove: number }>()
);

export const loadMusicItemInfoAddToCart = createAction(
  '[Load Music Info From Api] load info from api and create food cart item ',
  props<{ musicItem: MusicItem }>()
);

export const addMusicCartItemToCart = createAction(
  '[Add from effect] add music cart item to cart',
  props<{ musicCartItem: MusicItemInCart }>()
);

export const removeMusicCartItemFromCart = createAction(
  '[Remove Music Cart Item and Reduce Total Price] removing music item by id',
  props<{ musicItemInCart: MusicItemInCart }>()
);
