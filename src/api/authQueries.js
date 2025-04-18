import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authQueries = fetchBaseQuery({
  prepareHeaders: (headers) => {
    const token = "4|4AC5uqy9AZvSwG3lVdbc4zDB1LklFT5z4IajkRbW78bb2c5c";

    headers.set("Authorization", `Bearer ${token}`);

    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");

    return headers;
  },
});
