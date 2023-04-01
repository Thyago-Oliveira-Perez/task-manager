import { Model } from 'mongoose';
import { NewTask, NewTaskReturn, TaskResponse } from './dto';
import { TaskDeletedResponse, TasksResponse } from './dto/TaskResponse.dto';
import { Task } from './schemas/task.schemas';
export declare class TaskService {
    private readonly taskModel;
    private readonly logger;
    constructor(taskModel: Model<Task>);
    createTask(task: NewTask): Promise<NewTaskReturn>;
    getTaskById(id: string): Promise<TaskResponse>;
    getAllTasks(): Promise<TasksResponse>;
    editTaskById(id: string, newTask: Task): Promise<Task>;
    deletedTaskById(id: string): Promise<TaskDeletedResponse>;
}
