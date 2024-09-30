import QuizCard from "./QuizCard";
import CabinCard from "./QuizCard";

async function QuizList() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      <QuizCard name="اختبار في القران" href={`/quiz/startQuranQuiz`} />
      <QuizCard name="اختبار معلومات اسلاميه" href={`/quiz/startGeneralQuiz`} />
    </div>
  );
}

export default QuizList;
