export interface TaskModel {
    "id": number,
    "name": string,
    "deadline": string,
    "completedAt": string
}

export interface TaskListModel extends Array<TaskModel> {}