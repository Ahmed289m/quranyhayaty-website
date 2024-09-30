// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../_components/QuizSlice";

// Configure and export the store
const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
