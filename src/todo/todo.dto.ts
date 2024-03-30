// todo.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
