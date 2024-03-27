// src/todo.model.ts
import mongoose, { Schema } from 'mongoose';

export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model('Todo', TodoSchema);
