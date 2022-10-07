import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { TaskListModel } from 'src/app/store/store.models';
import { selectTaskList } from 'src/app/store/store.selectors';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.scss']
})
export class PendingTaskComponent implements OnInit {
  constructor() { 
    this.taskList = [];
  }
  
  @Input() taskList : TaskListModel;

  test = () => {
    console.log(this.taskList);
  }
  ngOnInit(): void {

  }
}
