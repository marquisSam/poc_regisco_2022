import { createSelector } from "@ngrx/store";
import { AppState, TasksState } from "./app.state";
import { TaskListModel } from "./store.models";
import * as moment from 'moment';

const selectTasksState = (state : AppState ) : TasksState  => state.tasks



export const selectTaskList = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => state.taskList
);
export const selectTaskToCome = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => {
        return state.taskList.filter(task => {
            const today = new Date();
            const dueTime = new Date(task.deadlineTimestamp);
            
            // console.log("task ",task)
            // console.log("today ",moment(today).format('LL'))
            // console.log("dueTime ",dueTime)
            // console.log("dueTime ",moment(dueTime).format('LL'))
            // console.log(task.deadline)
            // console.log("----------------")

            if(today >= dueTime) return task
            return null
        })
        // return state.taskList
    }
);
export const selectTaskLate = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => state.taskList
);
export const selectTaskCompleted = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => state.taskList
);

export const selectFetchErrState = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => state.fetchErrState
);