import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Store } from "@ngrx/store";
import { fetchTasksSuccess, fetchTasks } from "./store.actions";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, withLatestFrom, tap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class storeEffect {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store
  ) { }


  fetchTask$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTasks),
    switchMap(() => this.apiService.fetchTask()
      .pipe(
        map(taskList => {
          console.log("fetchTask effects", taskList)
          return fetchTasksSuccess({taskList})
        }),
        catchError(() => EMPTY)
      ))
  ));

//   fetchTaskSuccess$ = createEffect(() => this.actions$.pipe(
//     ofType(fetchTasksSuccess),
//     map(({loreNodeCollection})=>{
//       return EMPTY
//     })
//   ));
}