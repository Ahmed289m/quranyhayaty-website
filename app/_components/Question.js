"use client";

import { useSelector } from "react-redux";

function Question() {
  const { questions, index } = useSelector((store) => store.quiz);
  return <h1 className="text-2xl md:text-3xl">{questions[index].question}</h1>;
}

export default Question;
