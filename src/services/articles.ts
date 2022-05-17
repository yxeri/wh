import { createSelector } from '@reduxjs/toolkit';
import baseApi from './base';
import { RootState } from '../state/store';

export interface Article {
  id: string,
  name: string,
  amountInStock: number,
}

export const articleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<Array<Article>, void>({
      query: () => 'articles',
      providesTags: ['Article'],
    }),
    getArticle: build.query<Article, string>({
      query: (id) => `articles/${id}`,
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
} = articleApi;

// @ts-ignore
export const selectArticleById = createSelector(
  [
    articleApi.endpoints.getArticles.select(),
    (_: RootState, id: string) => id,
  ],
  (
    { data: articles }: { data: Array<Article> },
    id: string,
  ) => (articles.find((article) => article.id === id)),
);
