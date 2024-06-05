import { ITodo } from '../../shared/model/todo.types';

export const getTodosMapper = {
  mapToList: (data: any): ITodo[] => {
    return Array.isArray(data.results)
      ? data.results.map((item: any) => ({
          id: item.id || '',
          userId: item.user || 0,
          completed: item.completed || false,
          title: item.title || '',
        }))
      : [];
  },
};
