import { createAction, props } from "@ngrx/store";
import { TaskListModel, TaskModel } from "./store.models";

export const fetchTasks = createAction(
    '[TASK DATA] fetch task'
);
export const fetchTasksSuccess = createAction(
    '[TASK DATA] fetch task success',
    props<{ taskList : TaskListModel }>()
);
export const fetchTasksFailure = createAction(
    '[TASK DATA] fetch task failure',
    props<{ err : any }>()
);