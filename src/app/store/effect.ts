import { Injectable } from "@angular/core";
import { ActionsSubject } from '@ngrx/store';
//import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { MusicService } from '../services/music.service';
import { ActionTypes } from './action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class ShopEffects{
    constructor(private actions$: Actions, private musicService: MusicService) {}


@Effect()
loadAlbums$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(()=>
        this.musicService.getAllMusicItems$().pipe(
            map(albums=> {
                return { type: ActionTypes.LoadSuccess, payload: albums };
            }),
            catchError(() => EMPTY)
        )
    )
)
}