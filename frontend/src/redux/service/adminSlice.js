import apiSlice from "./apiSlice";


const adminSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (data) => ({
                url: '/admin/signin',
                body: data,
                method: 'POST'
            })
        }),

        signup: builder.mutation({

            query: (data) => ({
                url: '/admin/signup',
                body: data,
                method: 'POST'
            })
        }),

        getCompanies: builder.query({
            query: () => '/admin/getCompanies'
        }),

        getCompaniesPending: builder.query({
            query: () => '/admin/getCompaniesPending'
        }),

        getById : builder.query({
            query: (id) => `/admin/getById/${id}`
        }),

        getByIdAccept : builder.mutation({
            query: (id) => ({
                
               url: `/admin/getByIdAccept/${id}`,
               method: 'POST',
               body: id

            })
        }),
        getByIdReject : builder.mutation({
            query: (id) => ({
                
               url: `/admin/getByIdReject/${id}`,
               method: 'POST',
               body: id

            })
        }),

        getChartData: builder.mutation({
            query: (id) => ({
                
               url: `/admin/getChartData/${id}`,
               method: 'POST',
               body: id

            })
        }),

        addFund: builder.mutation({
            query: (data) => ({
                url: '/admin/addFund',
                method: 'POST',
                body: data
            })
        }),

    })
})

export const { useSigninMutation, useSignupMutation, useGetCompaniesQuery, useGetByIdQuery, useGetCompaniesPendingQuery, useGetByIdAcceptMutation, useGetByIdRejectMutation, useGetChartDataMutation, useAddFundMutation } = adminSlice