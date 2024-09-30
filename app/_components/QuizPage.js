"use client";

import { useDispatch, useSelector } from "react-redux";
import Answers from "./Answers";
import Question from "./Question";
import { dataRecieved, start } from "./QuizSlice";
import NextBtn from "./NextBtn";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import { useEffect, useState } from "react";

function QuizPage({ questions }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataRecieved(questions));
    dispatch(start());
  }, [dispatch, questions]);
  const status = useSelector((state) => state.quiz.status);
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <>
      {status === "active" && (
        <>
          <Progress />
          <Question />
          <Answers isAnswered={isAnswered} setIsAnswered={setIsAnswered} />
          <NextBtn isAnswered={isAnswered} setIsAnswered={setIsAnswered} />
        </>
      )}
      {status === "finish" && <FinishScreen setIsAnswered={setIsAnswered} />}
    </>
  );
}

export default QuizPage;
