import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://79.174.12.131/api/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => "login",
      transformResponse: (response) =>
        response.results.map((char) => ({
          id: char.id,
          name: char.name,
          image: char.image,
          price: Math.floor(Math.random() * 100) + 50, // Добавляем цену
          status: char.status,
          species: char.species,
        })),
    }),
    register: builder.mutation({
      query: () => "register",
      transformResponse: (response) =>
        response.results.map((char) => ({
          id: char.id,
          name: char.name,
          image: char.image,
          price: Math.floor(Math.random() * 100) + 50, // Добавляем цену
          status: char.status,
          species: char.species,
        })),
    }),
    logout: builder.mutation({
      query: () => "logout",
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  userApi;
