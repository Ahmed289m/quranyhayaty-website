import { Suspense } from "react";
import Loading from "../loading";
import QuizList from "../_components/QuizList";

export const revalidate = 0;

export const metadata = {
  title: "اختبر نفسك",
};

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium text-right">
        اختبر نفسك الان
      </h1>
      <p className="text-primary-200 text-lg mb-10 text-right">
        مرحبًا بكم في صفحة اختبارات القرآن الكريم والمعلومات الإسلامية العامة!
        نقدم لكم مجموعة متنوعة من الاختبارات التفاعلية التي تساعدكم على تقييم
        معرفتكم بالقرآن الكريم، بما في ذلك التلاوة الصحيحة، التجويد، والتفسير.
        كما ستجدون أسئلة تغطي السيرة النبوية، الفقه، العقيدة، والتاريخ الإسلامي.
        تهدف هذه الاختبارات إلى تعزيز فهمكم لتعاليم الإسلام بأسلوب سهل وممتع، مع
        إمكانية مراجعة الإجابات وتحسين أدائكم بشكل مستمر. استعدوا لاختبار
        معرفتكم الدينية والانطلاق في رحلة تعلمية مليئة بالفائدة.
      </p>
      <div className="flex justify-end mb-8"></div>
      <Suspense fallback={<Loading />}>
        <QuizList />
      </Suspense>
    </div>
  );
}
