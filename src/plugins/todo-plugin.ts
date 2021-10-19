import { registerPlugin } from "@capacitor/core";

export interface ToDoItem {
  id: number;
  name: string;
  dueDate: number;
  done: boolean;
}

type UpsertOptions = Pick<ToDoItem, "done" | "dueDate" | "name"> & {
  id?: number;
};

export interface ToDoPlugin {
  getAll(): Promise<{ todos: ToDoItem[] }>;
  getOne(options: { id: number }): Promise<{ todo: ToDoItem }>;
  upsert(todo: UpsertOptions): Promise<void>;
  delete(options: { id: number }): Promise<void>;
}

const ToDo = registerPlugin<ToDoPlugin>("ToDo");

export default ToDo;
