import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { TodoDto } from './todo.dto';
import { TodoService } from './todo.service';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({ status: 200, description: 'Returns all todos.' })
  async findAll() {
    return this.todoService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a todo' })
  @ApiBody({ type: TodoDto })
  @ApiResponse({ status: 201, description: 'The todo has been successfully created.' })
  async create(@Body() todoDto: TodoDto) {
    return this.todoService.create(todoDto);
  }
}
