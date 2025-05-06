import { registerPlugin } from '@capacitor/core';

import type { ToDoPlugin } from './definitions';

const ToDo = registerPlugin<ToDoPlugin>('ToDo', {
  web: () => import('./web').then((m) => new m.ToDoPluginWeb()),
});

export * from './definitions';
export { ToDo };
