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
    addReminder: (state, { payload }) => ({
      ...state,
      list: [...state.list, payload],
    }),
  },
});

export const { setReminders, addReminder } = slice.actions;

export default slice.reducer;

// Selector
export const getReminders = (store) => store.reminders.list;
