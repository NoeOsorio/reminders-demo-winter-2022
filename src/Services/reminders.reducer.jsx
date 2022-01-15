import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "reminders",

  initialState: {
    list: [],
  },

  reducers: {
    setReminders: (state, { payload: list }) => ({
      ...state,
      list,
    }),
  },
});

export const { setReminders } = slice.actions;

export default slice.reducer;

// Selector
export const getReminders = (store) => store.reminders.list;
