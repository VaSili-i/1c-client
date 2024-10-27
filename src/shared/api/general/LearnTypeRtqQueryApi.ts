import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type LearnTypeTp } from 'shared/types/entities/learnTypes';

const learnTypeRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTypeLearn: build.query<LearnTypeTp[], undefined>({
      query: () => ({
        url: 'learn/type'
      })
    })
  })
});

export const { useGetAllTypeLearnQuery } = learnTypeRtqQueryApi;
