import { useDispatch, useSelector } from "react-redux";
import { restart, start } from "./QuizSlice";

function FinishScreen({ setIsAnswered }) {
  const { points, questions } = useSelector((store) => store.quiz);
  const maxPossiblePoints = questions.length * 10;
  const dispatch = useDispatch();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result text-xl">
        <span>{emoji}</span> لقد احرزت <strong>{points}</strong> من{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui text-lg"
        onClick={() => {
          dispatch(restart());
          dispatch(start());
          setIsAnswered(false);
        }}
      >
        إعادة الاختبار
      </button>
    </>
  );
}

export default FinishScreen;
