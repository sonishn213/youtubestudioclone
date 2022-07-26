import { configureStore } from "@reduxjs/toolkit";
import captionReducer from "../reducers/Caption/captionSlice";
import videoReducer from "../reducers/Video/videoSlice";
const store = configureStore({
  reducer: {
    caption: captionReducer,
    video: videoReducer,
  },
});
export default store;
