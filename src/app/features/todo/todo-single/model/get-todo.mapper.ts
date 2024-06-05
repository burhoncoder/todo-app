import { ITodo } from '../../shared/model/todo.types';

export const getTodoMapper = {
  mapToSingle: (data: any): ITodo => ({
    id: data?.id || '',
    title: data?.title || '',
    userId: data?.userId || 0,
    completed: data?.completed || false,
  }),
};
