import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '19eb7eff0amsh4666df3ccf30ef1p1c1048jsn6d8e0f9789f9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getDetail: builder.query({
            query: ( id ) => createRequest(`/coin/${id}`)
        }),
        getHistory: builder.query({
            query: ({ id, timeperiod}) => createRequest(`/coin/${id}/history?timePeriod=${timeperiod}`)
        })
    })
})

 export const { useGetCryptoQuery, useGetDetailQuery, useGetHistoryQuery} = cryptoApi;
// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': '19eb7eff0amsh4666df3ccf30ef1p1c1048jsn6d8e0f9789f9'
//   }
// };
