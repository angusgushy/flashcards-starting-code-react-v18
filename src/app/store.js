import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/TopicsSlice.js";

export default configureStore({
  reducer: {
    allTopics: topicsReducer,
  },
});
