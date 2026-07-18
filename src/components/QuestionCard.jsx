import { motion } from "framer-motion";
import Button from "./Button";
import MovingButton from "./MovingButton";
import { useRef } from "react";

const QuestionCard = ({ question, onOptionClick }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      key={question.id}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{
        duration: 0.35
    }}
      className="
relative
w-[92%]
max-w-md
min-h-[420px]
rounded-3xl
bg-white/15
backdrop-blur-xl
border
border-white/20
p-6
sm:p-8
shadow-2xl
overflow-hidden
"
    >
      <h1 className="
mb-8
text-center
text-2xl
font-bold
text-white
whitespace-pre-line
sm:text-3xl
">
        {question.title}
      </h1>

      <div className="space-y-4">

    {question.options.map((option) => {

        if (option.action === "RUN_AWAY") {
            return (
                <MovingButton
    key={option.text}
    text={option.text}

/>
            );
        }

        return (
            <Button
                key={option.text}
                onClick={() => onOptionClick(option)}
            >
                {option.text}
            </Button>
        );

    })}

</div>
    </motion.div>
  );
};

export default QuestionCard;