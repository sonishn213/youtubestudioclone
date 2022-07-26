import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    value: {
      totalDuration: 0,
    },
  },
  reducers: {
    setDuration: (state, action) => {
      state.value = {
        ...state.value,
        totalDuration: action.payload.totalDuration,
      };
    },
  },
});

export const { setDuration } = videoSlice.actions;
export default videoSlice.reducer;
