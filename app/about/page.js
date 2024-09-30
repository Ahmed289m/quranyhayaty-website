import Link from "next/link";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import Image from "next/image";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "عنا",
};

export default async function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          أهلا بك في موقعنا قرآني حياتي
        </h1>

        <div className="space-y-8">
          <p>
            موقعنا هو منصة تعليمية مبتكرة تقدم اختبارات تفاعلية في القرآن الكريم
            والمعلومات الإسلامية العامة. يهدف الموقع إلى تعزيز معرفة المستخدمين
            بالقرآن الكريم، من خلال أسئلة شاملة تغطي التلاوة، التجويد، والتفسير.
            كما يقدم اختبارات متنوعة لقياس مدى الإلمام بالسيرة النبوية، الفقه،
            العقيدة، والأحداث التاريخية الإسلامية. يعتمد الموقع على تصميم سهل
            الاستخدام يمكن الجميع من التفاعل بسلاسة، سواء كانوا مبتدئين أو
            متقدمين في معرفتهم الإسلامية.
          </p>
          <p>
            أحد أهم أهداف الموقع هو تشجيع التعلم الذاتي المستمر بأسلوب ممتع
            وتفاعلي. من خلال الأسئلة المتنوعة والمراجعات الفورية، يمكن للمستخدم
            أن يحدد نقاط قوته وضعفه في مختلف المواضيع الإسلامية. يتميز الموقع
            بواجهة سهلة الاستخدام تتيح للجميع، سواء كانوا مبتدئين أو متقدمين،
            الانخراط بسلاسة في عملية التعلم. كما يوفر النظام نصائح وإرشادات
            بناءً على أداء المستخدم لتحسين تجربته التعليمية.
          </p>
        </div>
      </div>

      <div className="relative aspect-square col-span-4 md:col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>

      <div className="relative aspect-square col-span-4 md:col-span-2 ">
        <Image
          src={about2}
          fill
          alt="Family that manages The Wild Oasis"
          className="object-cover"
          placeholder="blur"
        />
      </div>

      <div className="col-span-3">
        <div className="space-y-8">
          <p>
            تسعى المنصة أيضًا إلى تقديم تجربة تعليمية متكاملة من خلال تمكين
            المستخدمين من مراجعة الإجابات الصحيحة لكل سؤال. هذه الميزة تتيح فرصة
            للتعلم من الأخطاء وتعميق الفهم بشكل مستمر. كذلك، يوفر الموقع مواد
            مساعدة مثل الشروحات التفسيرية والتوجيهات الفقهية لدعم المستخدم في
            رحلته التعليمية، مما يجعله مرجعًا قويًا لكل من يرغب في تعزيز معرفته
            الدينية.
          </p>
          <p>
            في النهاية، يوفر الموقع بيئة محفزة تناسب جميع الأعمار، حيث يمكن
            للأفراد اختبار أنفسهم وتحدي معرفتهم بطريقة مرحة ومشوقة. سواء كنت
            تبحث عن تحسين قراءتك للقرآن أو فهم أعمق لتعاليم الإسلام، فإن هذا
            الموقع هو الخيار المثالي لتعزيز معرفتك وتنمية مهاراتك في هذا المجال
            الروحاني العظيم.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              اختبر نفسك الان في القران
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
