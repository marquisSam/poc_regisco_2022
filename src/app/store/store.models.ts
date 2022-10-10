export interface TaskModel {
    "id": number,
    "name": string,
    "deadline": string,
    "completedAt": string,
    "deadlineTimestamp" : number,
    "compAtTimestamp" : number

}

export interface TaskListModel extends Array<TaskModel> {}