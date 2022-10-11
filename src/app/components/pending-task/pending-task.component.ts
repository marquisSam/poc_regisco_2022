import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/class/task';
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
  
  @Input() err$ : Observable<any> | null = null;
  @Input('taskList') set taskList(value: TaskListModel) {
    console.log(value)

    value.forEach(task => {
        if(task.isLate && !task.completedAt) this.lateTasksList.push(task)
        if(!task.isLate && !task.completedAt) this.toComeTasksList.push(task)
        if(task.completedAt) this.completedTaskList.push(task)
    });

    this.lateTasksList = this.filterByDate("ascending", this.lateTasksList);
    this.toComeTasksList = this.filterByDate("ascending", this.toComeTasksList);
    this.completedTaskList = this.filterByDate("ascending", this.completedTaskList);
  }

  // err$ : Observable<any>;

  lateTasksList : TaskListModel = [];
  toComeTasksList : TaskListModel = [];
  completedTaskList : TaskListModel = [];

  showCompletedTaks : boolean = false;

  filterByDate(byCreationDateFilter : string, taskListModel : TaskListModel){
    return [...taskListModel].sort(( a : Task , b : Task ) : any => {
      if(byCreationDateFilter === "ascending"){
        return a.deadlineTimestamp - b.deadlineTimestamp;
      }else if(byCreationDateFilter === "descending"){
        return b.deadlineTimestamp - a.deadlineTimestamp;
      }else{
        return a.deadlineTimestamp - b.deadlineTimestamp;
      }
    })
  }

  
  ngOnInit(): void {
    console.log(this.taskList);

  }
}
