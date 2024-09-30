"use client";

import { useDispatch, useSelector } from "react-redux";
import { end, nextQuestion } from "./QuizSlice";

function NextBtn({ setIsAnswered }) {
  const dispatch = useDispatch();
  const { points, index, questions } = useSelector((store) => store.quiz);
  const numOfQuestions = questions.length;

  const handleNextClick = () => {
    setIsAnswered(false); // Reset isAnswered to false when going to the next question
    dispatch(nextQuestion());
  };

  if (index < numOfQuestions - 1)
    return (
      <button
        onClick={handleNextClick}
        className="border-primary-800 border py-2 px-2 text-xl hover:bg-accent-500 transition ease-in-out delay-80"
      >
        السؤال التالى
      </button>
    );

  if (index === numOfQuestions - 1)
    return (
      <button
        onClick={() => dispatch(end())}
        className="border-primary-800 border py-2 px-2 text-xl hover:bg-accent-500 transition ease-in-out delay-80"
      >
        إنهاء
      </button>
    );
}

export default NextBtn;
