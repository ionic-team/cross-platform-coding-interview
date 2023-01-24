import { registerPlugin, WebPlugin } from "@capacitor/core";

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

class ToDoPluginWeb extends WebPlugin implements ToDoPlugin {
  getAll(): Promise<{ todos: ToDoItem[]; }> {
    throw new Error("Method not implemented.");
  }
  getOne(options: { id: number; }): Promise<{ todo: ToDoItem; }> {
    throw new Error("Method not implemented.");
  }
  upsert(todo: UpsertOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(options: { id: number; }): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

const ToDo = registerPlugin<ToDoPlugin>("ToDo", {
  web: new ToDoPluginWeb(),
});

export default ToDo;
