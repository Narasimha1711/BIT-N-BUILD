import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const apiSlice = createApi({

    reducerPath: 'slice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),

    endpoints: () => ({})
})


export default apiSlice