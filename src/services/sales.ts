import baseApi from './base';

interface Sale {
  id: string,
  createdAt: string,
  productId: string,
  amountSold: number,
}

export const saleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSales: build.query<Array<Sale>, void>({
      query: () => 'sales',
    }),
    createSale: build.mutation({
      invalidatesTags: ['Article'],
      query: (sale) => ({
        url: 'sales',
        method: 'POST',
        body: sale,
      }),
    }),
  }),
});

export const {
  useGetSalesQuery,
  useCreateSaleMutation,
} = saleApi;
