import { Task } from '../schemas/task.schemas';
export declare class TaskResponse implements Task {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class TaskDeletedResponse {
    message: string;
}
export declare class TasksResponse {
    tasks: TaskResponse[];
}
