import { rtkQueryApi } from 'shared/api/config/rtkQuery';

import { type LearnResourceTp } from 'shared/types/entities/learnTypes';

const learnResourceRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllLearnResourceTree: build.query<LearnResourceTp[], undefined>({
      query: () => ({
        url: 'learn/resource/tree'
      })
    })
  })
});

export const { useGetAllLearnResourceTreeQuery } = learnResourceRtqQueryApi;
