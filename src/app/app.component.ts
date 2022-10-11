import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchTasks } from './store/store.actions';

import { Observable } from 'rxjs';
import { TaskListModel } from './store/store.models';
import { AppState } from './store/app.state';
import * as selector from './store/store.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'poc_regisco_2022';
  constructor(
    private store : Store<AppState>
  ) {
    //initiate fetch
    this.store.dispatch(fetchTasks());
  }

  //List from api, async
  public taskList$ : Observable<TaskListModel> = this.store.select(selector.selectTaskList);
  // public selectTaskToCome$ : Observable<any> = this.store.select(selector.selectTaskToCome);
  
  public selectFetchErrState$ : Observable<any> = this.store.select(selector.selectFetchErrState);
  
  ngOnInit(): void {}
}