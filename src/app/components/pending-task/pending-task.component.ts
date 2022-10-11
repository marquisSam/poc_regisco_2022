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
    // this._taskList = [];
    // this.lateTasksList = [];
    // this.toComeTasksList = [];
    // this.completedTaskList = [];
  }
  // _taskList : TaskListModel
  
  @Input('taskList') set taskList(value: TaskListModel) {
    console.log(value)
    // this._taskList = value;

    value.forEach(task => {
        if(task.isLate && !task.completedAt) this.lateTasksList.push(task)
        if(!task.isLate && !task.completedAt) this.toComeTasksList.push(task)
        if(task.completedAt) this.completedTaskList.push(task)
    });
  }
  // get taskList(): TaskListModel {
  //   return this._taskList;
  // }


  lateTasksList : TaskListModel = [];
  toComeTasksList : TaskListModel = [];
  completedTaskList : TaskListModel = [];

  showCompletedTaks : boolean = false;

  // private sort = (list) : void => {

  // }



  
  ngOnInit(): void {
    console.log(this.taskList);

  }
}
