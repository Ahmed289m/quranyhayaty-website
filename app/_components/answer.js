import { useDispatch, useSelector } from "react-redux";
import { addNewAnswer } from "./QuizSlice";
import { useState } from "react";

function Answer({ isAnswered, setIsAnswered }) {
  const dispatch = useDispatch();
  const { questions, index, answer } = useSelector((store) => store.quiz);
  const correctAnswer = questions[index].correctAnswer;

  const handleAnswerClick = (ans) => {
    if (!isAnswered) {
      dispatch(addNewAnswer(ans));
      setIsAnswered(true); // Disable further clicks after selecting
    }
  };

  return (
    <>
      {questions[index].answers.map((ans, i) => (
        <h3
          key={ans}
          className={`cursor-pointer hover:bg-accent-500 py-2 border-primary-800 border rounded-sm pr-2 transition ease-in-out delay-80 ${
            answer === ans ? "mr-5" : ""
          } ${
            answer
              ? ans === correctAnswer
                ? "bg-green-500 text-white" // Correct answer style
                : answer === ans
                ? "bg-red-500 text-white" // Incorrect answer style
                : "" // Do nothing for unselected answers
              : "hover:bg-accent-500" // Hover effect if no answer selected
          }  `}
          onClick={() => handleAnswerClick(ans)}
          style={{ pointerEvents: isAnswered ? "none" : "auto" }}
        >
          {ans}
        </h3>
      ))}
    </>
  );
}

export default Answer;
