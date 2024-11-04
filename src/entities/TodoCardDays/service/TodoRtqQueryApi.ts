import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import {
  type TodoCompleteAddTp,
  type TodoCompleteTp,
  type TodoTp,
  TypeTodoEnum
} from 'shared/types/entities/todoTypes';

const todoRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTodoByType: build.query<TodoCompleteTp[], string>({
      query: (type: TypeTodoEnum) => ({
        url: 'todo/groups/list',
        params: { type }
      }),
      providesTags: ['todo']
    }),
    addTodoGroup: build.mutation<string, TodoCompleteAddTp>({
      query: (todo: TodoCompleteAddTp) => ({
        url: 'todo/groups',
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['todo']
    }),
    addTodo: build.mutation<string, any>({
      query: ({ todo, idGroup }) => ({
        // todo:  переделать типы
        url: 'todo',
        method: 'POST',
        body: todo,
        params: { idGroup }
      }),
      invalidatesTags: ['todo']
    }),
    changeIsDone: build.mutation<TodoTp, TodoTp>({
      query: (todo: TodoTp) => ({
        url: 'todo',
        method: 'PUT',
        body: todo,
        params: { id: todo._id }
      }),
      invalidatesTags: ['todo']
    }),
    deleteTodo: build.mutation<string, string>({
      query: (id: string) => ({
        url: 'todo',
        method: 'DELETE',
        params: { id }
      }),
      invalidatesTags: ['todo']
    })
  })
});

export const {
  useGetAllTodoByTypeQuery,
  useAddTodoGroupMutation,
  useAddTodoMutation,
  useChangeIsDoneMutation,
  useDeleteTodoMutation
} = todoRtqQueryApi;
