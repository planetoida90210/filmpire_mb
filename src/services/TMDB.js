import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const tmdbApiKey = process.env.TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
});
