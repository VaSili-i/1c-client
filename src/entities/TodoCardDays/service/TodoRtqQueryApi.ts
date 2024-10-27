import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type TodoCompleteAddTp, type TodoCompleteTp, type TodoTp } from 'shared/types/entities/todoTypes';

const todoRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTodoByType: build.query<TodoCompleteTp[], string>({
      query: (typeCode: string) => ({
        url: 'todos'
      }),
      providesTags: ['todo']
    }),
    addTodoGroup: build.mutation<string, TodoCompleteAddTp>({
      query: (todo: TodoCompleteAddTp) => ({
        url: 'todos/create',
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['todo']
    }),
    addTodo: build.mutation<string, any>({
      query: (todo: any) => ({
        // todo:  переделать типы
        url: 'todos',
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['todo']
    }),
    changeIsDone: build.mutation<TodoTp, TodoTp>({
      query: (todo: TodoTp) => ({
        url: 'todos',
        method: 'PUT',
        body: todo
      }),
      invalidatesTags: ['todo']
    }),
    deleteTodo: build.mutation<string, string>({
      query: (idTodo: string) => ({
        url: 'todos',
        method: 'DELETE',
        params: { idTodo }
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
