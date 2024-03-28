import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      const todo = await this.todoService.create(createTodoDto);
      return todo;
    } catch (error) {
      // Check if the error is a validation error
      if (error.name === 'ValidationError') {
        // Return a 400 Bad Request response with details of the validation error
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      } else {
        // If it's not a validation error, re-throw the original error
        throw error;
      }
    }

  }
}
