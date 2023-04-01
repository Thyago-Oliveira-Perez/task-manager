import { NewTask, NewTaskReturn, TaskResponse } from './dto';
import { TaskDeletedResponse, TasksResponse } from './dto/TaskResponse.dto';
import { Task } from './schemas/task.schemas';
import { TaskService } from './services/task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(newTask: NewTask): Promise<NewTaskReturn>;
    getTaskById(param: any): Promise<TaskResponse>;
    getAll(): Promise<TasksResponse>;
    editById(param: any, body: Task): Promise<Task>;
    deleteById(param: any): Promise<TaskDeletedResponse>;
}
