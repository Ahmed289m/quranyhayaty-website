import Link from "next/link";

function QuizCard({ name, href }) {
  return (
    <div className="flex border-primary-800 border">
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            {name}
          </h3>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={href}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            إبدأ الإختبار
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
