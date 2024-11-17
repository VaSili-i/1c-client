import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type TagTpV } from 'shared/types/entities/learnTypes';

const levelRtqQueryApi = rtkQueryApi.injectEndpoints?.({
  endpoints: (build) => ({
    getAllTag: build.query<TagTpV[], undefined>({
      query: () => ({
        url: 'resource/tag'
      })
    })
  })
});

export const { useGetAllTagQuery } = levelRtqQueryApi;
