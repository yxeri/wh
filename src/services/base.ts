import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/dist/query/react';

export default createApi({
  reducerPath: 'warehouse',
  baseQuery: retry(
    fetchBaseQuery({ baseUrl: 'http://localhost:7001' }),
  ),
  endpoints: () => ({}),
  tagTypes: ['Article', 'Product', 'Sale'],
});
