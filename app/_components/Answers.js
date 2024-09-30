import { useSelector } from "react-redux";
import Answer from "@/app/_components/answer";

function Answers({ isAnswered, setIsAnswered }) {
  return (
    <div className="text-xl md:2xl flex flex-col gap-10 w-full px-5 text-right pb-5">
      <Answer setIsAnswered={setIsAnswered} isAnswered={isAnswered} />
    </div>
  );
}

export default Answers;
