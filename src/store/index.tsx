import { RootStore } from './RootStore';
import { Todo } from './Todo';

export * from './RootStore';
export * from './Todo';

export const Routes = ['/', '/active', '/completed'];
export type PathParam = { path: string };

export interface RootStoreProps {
  appStore: RootStore;
}

export interface TodoProps {
  todo: Todo;
}

export const rootStore = new RootStore();
