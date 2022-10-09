import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchTasks } from './store/store.actions';

import { Observable } from 'rxjs';
import { TaskListModel } from './store/store.models';
import { selectFetchErrState, selectTaskList } from './store/store.selectors';
import { AppState } from './store/app.state';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc_regisco_2022';
  constructor(
    private spinner: NgxSpinnerService,
    private store : Store<AppState>
  ) {
    //initiate fetch
    this.store.dispatch(fetchTasks());
  }

  //List from api, async
  public taskList$ : Observable<TaskListModel> = this.store.select(selectTaskList);
  public selectFetchErrState$ : Observable<any> = this.store.select(selectFetchErrState);
  
  ngOnInit(): void {
  }
}