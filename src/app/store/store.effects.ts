import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { fetchTasksSuccess, fetchTasks, fetchTasksFailure } from "./store.actions";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap, take } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { TimeService } from '../services/time.service';

@Injectable()
export class storeEffect {

  constructor(
    private spinner: NgxSpinnerService,
    private timeService: TimeService,
    private actions$: Actions,
    private apiService: ApiService
  ) { }

  fetchTask$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTasks),
    tap(() => {
      this.spinner.show('task-spinner')

    }),
    switchMap(() => this.apiService.fetchTask()
      .pipe(
        map(taskList => {
          // adding the timestamp for an easyer sorting
          taskList.map(item => {
            // const [years, month, day] = createTimeStamp(item.deadline);
            if(item.deadline) item.deadlineTimestamp = this.timeService.createTimeStamp(item.deadline);
            if(item.completedAt) item.compAtTimestamp = this.timeService.createTimeStamp(item.completedAt);
            return item
          })
          taskList.map(item => item.compAtTimestamp = new Date(item.completedAt).getTime())
          return fetchTasksSuccess({taskList})
        }),
        catchError((fetchErrState) => of(fetchTasksFailure({fetchErrState})))
      ))
  ));
  fetchTasksSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTasksSuccess),
    take(1),
    tap(()=>{
      this.spinner.hide('task-spinner')
    })
  ));
  fetchTasksFailure$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTasksFailure),
    take(1),
    tap((err) => {
      tap(()=>{this.spinner.hide('task-spinner')})
    })
  ));
}