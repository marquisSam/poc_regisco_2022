import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { fetchTasksSuccess, fetchTasks, fetchTasksFailure } from "./store.actions";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap, take } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class storeEffect {

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) { }

  fetchTask$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTasks),
    switchMap(() => this.apiService.fetchTask()
      .pipe(
        map(taskList => {
          return fetchTasksSuccess({taskList})
        }),
        catchError((fetchErrState) => of(fetchTasksFailure({fetchErrState})))
      ))
  ));
  // fetchTasksSuccess$ = createEffect(() => this.actions$.pipe(
  //   ofType(fetchTasksSuccess),
  //   switchMap(() => this.apiService.fetchTask()
  //     .pipe(
  //       map(taskList => {
  //         return fetchTasksSuccess({taskList})
  //       }),
  //       catchError((e) => EMPTY)
  //     ))
  // ));
  // fetchTasksFailure$ = createEffect(() => this.actions$.pipe(
  //   ofType(fetchTasksFailure),
  //   take(1),
  //   tap((err) => {
  //     console.log("catch the err!" , err)
  //   })
  // ));
}