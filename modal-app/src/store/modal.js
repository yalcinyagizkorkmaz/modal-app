
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modals:[],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    append: (state, action) => {
        const { name, data } = action.payload;
        state.modals.push({ name, data });
      },
      destroy: (state) => {
        state.modals.pop();
      },
      deestroyAll: (state) => {
        state.modals = [];
      },
  },
});

export const { append,destroy,destroyAll} = modalSlice.actions;
export default modalSlice.reducer;
