import NextBtn from "@/app/_components/NextBtn";
import QuizContainer from "@/app/_components/QuizContainer";
import { getGeneralQuestions } from "@/app/_lib/data-service";
export const revalidate = 0;

async function Page() {
  const questions = await getGeneralQuestions();

  return (
    <>
      <div className="py-[80px] flex flex-col items-center gap-10">
        <QuizContainer questions={questions} />
      </div>
    </>
  );
}

export default Page;
