import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders={
    // 
    'X-RapidAPI-Key': '2161657bfcmshe9e4011939e3110p18b9b0jsn9115c47cde08',
    'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
  
};
//const baseUrl='https://bing-news-search1.p.rapidapi.com';
const baseUrl='https://news-api14.p.rapidapi.com';
const createRequest= (url) => ({url,headers:cryptoNewsHeaders});

export const cryptoNewsApi=createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory}) => createRequest(`/search?q=${newsCategory}`),
        })
    })

});

export const {
    useGetCryptoNewsQuery
}= cryptoNewsApi;