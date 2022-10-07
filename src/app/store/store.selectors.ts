import { createSelector, State } from "@ngrx/store";
import { AppState, TasksState } from "./app.state";
import { TaskListModel, TaskModel } from "./store.models";

// export const selectTasks = createSelector(
//     (state: AppState) : any => state.tasks,
//     (tasks) => {
//         console.log(tasks)
//     }
//   );

//   export const selectAllTasks = (state: AppState) => state.tasks;
//   export const selectTasks = createSelector(
//     selectAllTasks,
//     (state: TaskModel[]) => [...state]
//   );

    const selectTasksState = (state : AppState ) : TasksState  => state.tasks

  export const selectTaskList = createSelector(
    selectTasksState,
    (state: TasksState) : TaskListModel => state.taskList
    // (tasks: Array<TaskModel>) => tasks
  );