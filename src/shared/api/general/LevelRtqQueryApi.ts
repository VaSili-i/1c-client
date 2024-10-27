import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type LevelTp } from 'shared/types/entities/todoTypes';

const levelRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllLevel: build.query<LevelTp[], undefined>({
      query: () => ({
        url: 'level',
        transformResponse: (response: any) => response.data.map(({ name, id }: { name: string; id: string }) => ({ id, name }))
      })
    })
  })
});

export const { useGetAllLevelQuery } = levelRtqQueryApi;
