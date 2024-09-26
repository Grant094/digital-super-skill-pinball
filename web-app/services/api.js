import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:3001/",
    }),
    endpoints: (builder) => ({
        score: builder.mutation({
            query: (score, name) => ({
                url: 'score/',
                method: 'POST',
                body: {
                    score: score,
                    name: name
                }
            })
        }),
    }),
});

export const { useScoreMutation } = api;