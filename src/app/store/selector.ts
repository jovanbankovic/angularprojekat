import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MusicItemState, musicAdapter } from './reducer';

export const musicItemKey = 'itemState';

export const selectExerciseFeatue = createFeatureSelector<MusicItemState>(
 musicItemKey
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = musicAdapter.getSelectors();

export const selectMusicItem = createSelector(
  selectExerciseFeatue,
  selectAll
);

export const selectNumberOfExercises = createSelector(
  selectExerciseFeatue,
  (state) => state.numberOfExercises
);
