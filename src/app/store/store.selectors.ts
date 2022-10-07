import { createSelector } from "@ngrx/store";
import { AppState, TasksState } from "./app.state";
import { TaskListModel } from "./store.models";

const selectTasksState = (state : AppState ) : TasksState  => state.tasks

export const selectTaskList = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => state.taskList
);