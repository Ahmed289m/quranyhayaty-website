"use client";

import { Provider } from "react-redux";

import store from "../_lib/store";
import QuizPage from "./QuizPage";

function QuizContainer({ questions }) {
  return (
    <Provider store={store}>
      <QuizPage questions={questions} />
    </Provider>
  );
}

export default QuizContainer;
