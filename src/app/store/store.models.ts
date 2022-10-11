export interface TaskModel {
    "id": number,
    "name": string,
    "deadline": string,
    "completedAt": string,

    "deadlineTimestamp" : number,
    "compAtTimestamp" : number
    "isCompleted" : boolean,
    "isLate" : boolean,
    "isYesterday" : boolean,
    "isToday" : boolean,
    "isTomorrow" : boolean,
    "dateLabel" : boolean,
}

export interface TaskListModel extends Array<TaskModel> {}
