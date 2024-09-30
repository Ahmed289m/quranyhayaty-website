"use client";

import { useSelector } from "react-redux";

function Progress() {
  const { points, index, questions } = useSelector((store) => store.quiz);
  const numOfQuestions = questions.length;

  const maxPossiblePoints = questions.reduce((prev, cur) => 10 + prev, 0);

  return (
    <div className="flex justify-between w-full">
      <p>
        سؤال <strong>{index + 1}</strong> / {numOfQuestions}
      </p>

      <p>
        نقطة <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
