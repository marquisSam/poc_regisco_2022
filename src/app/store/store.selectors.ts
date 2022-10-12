import { createSelector } from "@ngrx/store";
import { AppState, TasksState } from "./app.state";
import { TaskListModel } from "./store.models";
import * as moment from 'moment';

const selectTasksState = (state : AppState ) : TasksState  => state.tasks



export const selectTaskList = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => state.taskList
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