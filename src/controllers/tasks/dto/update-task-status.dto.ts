import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusDto {
    /**
     * A list of task statuses
     * @example IN_PROGRESS
     */
    @IsEnum(TaskStatus)
    status: TaskStatus
}