import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type HabitTp } from 'shared/types/entities/learnTypes';

const habitRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllHabits: build.query<HabitTp[], undefined>({
      query: () => ({
        url: 'habit'
      }),
      providesTags: ['habit']
    }),
    addHabits: build.mutation<string, Partial<HabitTp>>({
      query: (habit) => ({
        method: 'POST',
        url: 'habit',
        body: habit
      }),
      invalidatesTags: ['habit']
    }),
    plusOneProgress: build.mutation<string, Partial<HabitTp>>({
      query: (habit) => ({
        method: 'PUT',
        url: 'habit',
        body: habit
      }),
      invalidatesTags: ['habit']
    })
  })
});

export const { useGetAllHabitsQuery, useAddHabitsMutation, usePlusOneProgressMutation } = habitRtqQueryApi;
