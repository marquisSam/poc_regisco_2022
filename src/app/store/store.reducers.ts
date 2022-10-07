import { createReducer, on } from "@ngrx/store";
import { TasksState } from "./app.state";
import { fetchTasksSuccess } from "./store.actions";
import { TaskListModel } from "./store.models";

export const initialState: TasksState = {
    taskList : []
};
export const storeReducer = createReducer(
    initialState,
    on(fetchTasksSuccess, (state : TasksState, { taskList } : { taskList : TaskListModel} ) : TasksState => {
        return { ...state, taskList }
    }),
);