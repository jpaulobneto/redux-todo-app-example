/**
 * TODO: Move this file to ./actions/ directory
 */
import { schema } from 'normalizr';

export const todo = new schema.Entity('todos');
export const arrayOfTodos = new schema.Array(todo);
