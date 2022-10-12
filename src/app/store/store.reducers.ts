import { createReducer, on } from "@ngrx/store";
import { TasksState } from "./app.state";
import { fetchTasksFailure, fetchTasksSuccess } from "./store.actions";
import { TaskListModel } from "./store.models";

export const initialState: TasksState = {
    taskList : [],
    fetchErrState : []
};
export const storeReducer = createReducer(
    initialState,
    on(fetchTasksSuccess, (state : TasksState, { taskList } : { taskList : TaskListModel} ) : TasksState => {
        return { ...state, taskList }
    }),
    on(fetchTasksFailure, (state : TasksState,  {fetchErrState}   ) : TasksState => {
        return {...state, fetchErrState }
    })
);