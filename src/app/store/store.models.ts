import { Task } from "../class/task";

export interface TaskCallPayloadModel {
    "id": number,
    "name": string ,
    "deadline": string ,
    "completedAt": string,
} 

export interface TaskListModel extends Array<Task> {}
export interface TaskCallPayloadModelListModel extends Array<TaskCallPayloadModel> {}
