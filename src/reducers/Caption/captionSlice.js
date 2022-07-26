import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const captionSlice = createSlice({
  name: "caption",
  initialState: { value: [] },
  reducers: {
    createAtEnd: (state, action) => {
      let flag = false;
      let stateLen = state.value.length;
      console.log("lenght", stateLen);
      const totalDuration = Math.floor(action.payload.totalDuration);
      let newEndTime = 0;
      let newStartTime = 0;
      if (stateLen > 0) {
        let lastElement = state.value[stateLen - 1];
        console.log(
          lastElement.endTime < totalDuration,
          lastElement.endTime,
          totalDuration
        );
        if (lastElement.endTime < totalDuration) {
          //calcualte remaining time available to add caption
          let remainingTime = totalDuration - lastElement.endTime;
          newStartTime = lastElement.endTime + 1;
          if (remainingTime < 4) {
            //if remaing time is less than 4 then remaining time is endtime
            newEndTime = totalDuration;
          } else {
            //if time available then add 4
            newEndTime = lastElement.endTime + 4;
          }
        }
        if (lastElement.endTime >= totalDuration) {
          flag = true;
        }
      } else {
        newStartTime = 0;
        if (totalDuration < 4) {
          //if remaing time is less than 4 then remaining time is endtime
          newEndTime = totalDuration;
        } else {
          //if time available then add 4
          newEndTime = 4;
        }
      }
      if (!flag) {
        console.log("flag", flag);
        state.value.push({
          id: uuid(),
          caption: "",
          startTime: newStartTime,
          endTime: newEndTime,
          isfocused: true,
          focusName: "caption",
        });
      }
    },
    readInput: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      const id = action.payload.id;

      const index = state.value.findIndex((item) => item.id === id);

      state.value[index] = { ...state.value[index], [name]: value };
    },
    deleteCaption: (state, action) => {
      state.value = state.value.filter((item) => {
        return item.id !== action.payload.id;
      });

      console.log(state);
    },
    setFocusedCaption: (state, action) => {
      const id = action.payload.id;
      const focusname = action.payload.focusname;

      state.value = state.value.map((item) => {
        if (item.id === id) {
          return { ...item, isfocused: true, focusName: focusname };
        } else {
          return { ...item, isfocused: false, focusName: "" };
        }
      });
    },
  },
});

export const { createAtEnd, deleteCaption, readInput, setFocusedCaption } =
  captionSlice.actions;
export default captionSlice.reducer;
