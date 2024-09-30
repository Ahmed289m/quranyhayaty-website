// store/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
const SEC_REM = 30;
// Initial state
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondRemaining: null,
};

// Define the slice
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    dataRecieved: (state, action) => {
      state.status = "ready";
      state.questions = action.payload;
    },
    dataFailed: (state) => {
      state.status = "error";
    },
    start: (state, action) => {
      state.status = "active";
      state.secondRemaining = state.questions.length * SEC_REM;
    },
    end: (state) => {
      state.status = "finish";
      state.index = 0;
      state.answer = null;
    },
    addNewAnswer: (state, action) => {
      const question = state.questions[state.index];
      state.answer = action.payload;
      if (action.payload === question.correctAnswer) {
        state.points += 10;
      }
    },
    nextQuestion: (state) => {
      state.index += 1;
      state.answer = null;
    },
    restart: (state) => {
      state.status = "ready";
      state.index = 0;
      state.answer = null;
      state.points = 0;
      state.secondRemaining = null;
    },
    tick: (state) => {
      state.secondRemaining -= 1;
      if (state.secondRemaining === 0) {
        state.status = "finish";
      }
    },
  },
});

// Export actions and reducer
export const {
  dataRecieved,
  dataFailed,
  start,
  end,
  addNewAnswer,
  nextQuestion,
  restart,
  tick,
} = quizSlice.actions;

export default quizSlice.reducer;
