import { WebPlugin } from '@capacitor/core';

import type { ToDoItem, ToDoPlugin, UpsertOptions } from './definitions';

export class ToDoPluginWeb extends WebPlugin implements ToDoPlugin {
  getAll(): Promise<{ todos: ToDoItem[]; }> {
    throw new Error("Method not implemented.");
  }
    
  getOne(_options: { id: number; }): Promise<{ todo: ToDoItem; }> {
    throw new Error("Method not implemented.");
  }

  upsert(_todo: UpsertOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(_options: { id: number; }): Promise<void> {
    throw new Error("Method not implemented.");
  }

}
