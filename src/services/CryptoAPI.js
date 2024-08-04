import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CryptoHeaders = {
    'x-rapidapi-key': 'a5871ee111msh64f0676345d0f32p1f7579jsn3f2a4d4a1517',
   'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const BaseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: CryptoHeaders });

export const cryptoAPI = createApi({
    reducerPath: 'createAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins'),
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoAPI
