import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type LearnTypeTp } from 'shared/types/entities/learnTypes';

const levelRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTag: build.query<LearnTypeTp[], undefined>({
      query: () => ({
        url: 'learn/tag'
      })
    })
  })
});

export const { useGetAllTagQuery } = levelRtqQueryApi;
