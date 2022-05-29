import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTaskFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: "Search title or description" })
    search?: string
}