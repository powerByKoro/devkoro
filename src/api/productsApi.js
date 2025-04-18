import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://79.174.12.131/api/v1/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 4|4AC5uqy9AZvSwG3lVdbc4zDB1LklFT5z4IajkRbW78bb2c5c`,
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      transformResponse: (response) =>
        response.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: product.quantity,
          category: product.category,
        })),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
