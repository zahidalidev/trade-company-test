import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  links: [],
  data: [],
}

const slice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    UPDATE_COTACTS: (companies, action) => action.payload,
  },
})

export const { UPDATE_COTACTS } = slice.actions
export default slice.reducer
