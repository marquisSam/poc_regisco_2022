import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from './services/api.service';
import { fetchTasks } from './store/store.actions';

import { Subscription, Observable } from 'rxjs';
import { TaskListModel, TaskModel } from './store/store.models';
import { selectTaskList } from './store/store.selectors';
import { AppState } from './store/app.state';
// import { selectTasks } from './store/store.selectors';
// import { tasksSelector } from './store/store.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-regisco';
  constructor(
    private store : Store<AppState>
  ) {
    this.store.dispatch(fetchTasks());

  }
  public taskList$ : Observable<TaskListModel> = this.store.select(selectTaskList);
  
  ngOnInit(): void {

  }
}
