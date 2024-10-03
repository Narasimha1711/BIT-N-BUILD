import { createSlice } from '@reduxjs/toolkit'

const getCompanies = createSlice({
    name: "getCompanies",
    initialState: { companies: [], isLoading: false, error: null },

    reducers: {
        bring: (state, action) => {
            state.companies = action.payload
        }
    }
    
})


export default getCompanies.reducer;
export const { bring } = getCompanies.actions

