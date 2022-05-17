import { createSelector } from '@reduxjs/toolkit';
import baseApi from './base';
import { Article, articleApi } from './articles';

export interface ProductArticle {
  id: string,
  amountRequired: number,
}

export interface Product {
  id: string,
  name: string,
  articles: Array<ProductArticle>,
}

export interface ProductExpanded extends Product {
  quantity: number,
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Array<Product>, void>({
      query: () => 'products',
    }),
  }),
});

export const {
  useGetProductsQuery,
} = productApi;

// @ts-ignore
export const selectAvailableProducts = createSelector(
  [
    productApi.endpoints.getProducts.select(),
    articleApi.endpoints.getArticles.select(),
  ],
  (
    { data: products }: { data: Array<Product> },
    { data: articles }: { data: Array<Article> },
  ) => products.filter((product) => product.articles.every((productArticle) => {
    const foundArticle = articles.find((article) => article.id);

    return foundArticle && foundArticle.amountInStock >= productArticle.amountRequired;
  })),
);
