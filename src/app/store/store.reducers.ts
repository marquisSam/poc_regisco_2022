import { Action, createReducer, on, ReducerTypes } from "@ngrx/store";
// import { Action } from "rxjs/internal/scheduler/Action";
import { AppState, TasksState } from "./app.state";
import { fetchTasksSuccess } from "./store.actions";
import { TaskListModel, TaskModel } from "./store.models";

// export interface State {
//     tasks: ReadonlyArray<TaskModel>;
// }

export const initialState: TasksState = {
    taskList : []
};

// export const initalState : State = {
//     tasks : []
// };

export const storeReducer = createReducer(
    initialState,
    on(fetchTasksSuccess, (state : TasksState, { taskList } : { taskList : TaskListModel} ) : TasksState => {
        console.log("store reducer state",state)
        console.log("store reducer tasks",taskList)
        return { ...state, taskList }
    }),
);

// export function reducer(state: AppState | undefined, action: Action) {
//     return storeReducer(state, action);
//   }