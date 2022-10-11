import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { fetchTasksSuccess, fetchTasks, fetchTasksFailure } from "./store.actions";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { TimeService } from '../services/time.service';
import { TaskCallPayloadModelListModel, TaskListModel } from './store.models';
import { Task } from '../class/task';

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
        map((taskListPayload : TaskCallPayloadModelListModel) => {

          let taskList : TaskListModel = []
          taskListPayload.forEach(element => {
            taskList.push(new Task(element, this.timeService ))
          });
          
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
      this.spinner.hide('task-spinner')
    })
  ));
}