import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { fetchTasksSuccess, fetchTasks } from "./store.actions";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

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
        catchError(() => EMPTY)
      ))
  ));
}