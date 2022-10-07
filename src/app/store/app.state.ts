import { TaskListModel } from "./store.models";

export interface TasksState {
    taskList : TaskListModel
}

// root store
export interface AppState {
    tasks: TasksState;
}