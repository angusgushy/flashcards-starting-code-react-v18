import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/TopicsSlice.js";
import quizzesReducer from "../features/quizzes/QuizzesSlice.js";
export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
  },
});
