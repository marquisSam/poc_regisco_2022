import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/class/task';
import { TaskListModel } from 'src/app/store/store.models';
import { Store } from '@ngrx/store';
import { fetchTasks } from 'src/app/store/store.actions';
@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.scss']
})
export class PendingTaskComponent implements OnInit {
  constructor(private store : Store) {}
  
  @Input() err$ : Observable<any> | null = null;
  @Input('taskList') set taskList(value: TaskListModel) {
    value.forEach(task => {
        if(task.isLate && !task.completedAt) this.lateTasksList.push(task)
        if(!task.isLate && !task.completedAt) this.toComeTasksList.push(task)
        if(task.completedAt) this.completedTaskList.push(task)
    });

    this.lateTasksList = this.filterByDate("ascending", this.lateTasksList);
    this.toComeTasksList = this.filterByDate("ascending", this.toComeTasksList);
    this.completedTaskList = this.filterByDate("ascending", this.completedTaskList);
  }

  lateTasksList : TaskListModel = [];
  toComeTasksList : TaskListModel = [];
  completedTaskList : TaskListModel = [];

  showCompletedTaks : boolean = false;
  showDesign : boolean = false;

  showDesignToggle = () : void => {this.showDesign = this.showDesign ? false : true} 
  showCompletedTaksToggle = () : void => {this.showCompletedTaks = this.showCompletedTaks ? false : true} 
  
  reload = () : void => {
    this.lateTasksList = []
    this.toComeTasksList = []
    this.completedTaskList = []
  
    this.store.dispatch(fetchTasks());
  } 

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

  ngOnInit(): void {}
}
