import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => "character",
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
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
