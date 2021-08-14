import * as mst from 'mobx-state-tree';

export const Todo = mst.types
  .model('Todo', {
    id: mst.types.identifier,
    bodyText: mst.types.string,
    completed: mst.types.optional(mst.types.boolean, false),
  })
  .actions((self) => ({
    updateText: (newText: string) => (self.bodyText = newText),
    toggleCompleted: () => (self.completed = !self.completed),
  }));

export const RootStore = mst.types
  .model('RootStore', {
    todoList: mst.types.optional(mst.types.array(Todo), []),
  })
  .actions((self) => ({
    find: (id: string): ITodo | undefined => {
      return self.todoList.find((e) => e.id === id);
    },
  }))
  .actions((self) => ({
    add: (todo: ITodo) => self.todoList.push(todo),
    delete: (todo: ITodo) => self.todoList.remove(todo),
  }));

type InstanceTodo = mst.Instance<typeof Todo>;
type InstanceRootStore = mst.Instance<typeof RootStore>;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITodo extends InstanceTodo {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootStore extends InstanceRootStore {}

export interface RootStoreProps {
  appStore: IRootStore;
}

export interface TodoProps {
  todo: ITodo;
}

export const rootStore = RootStore.create();
