import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  links: [],
  data: [],
  allLinks: [],
  allData: [],
}

const slice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    UPDATE_COMPANIES: (companies, action) => {
      const { links, data } = action.payload
      return {
        links,
        data,
        allLinks: links,
        allData: data,
      }
    },
    FILTER_COMPANIES: (companies, action) => {
      const { links, data } = action.payload
      const { allLinks, allData } = companies

      return {
        links,
        data,
        allLinks,
        allData,
      }
    },
  },
})

export const { UPDATE_COMPANIES, FILTER_COMPANIES } = slice.actions
export default slice.reducer
