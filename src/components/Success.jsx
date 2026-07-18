import { motion } from "framer-motion";
import Confetti from "react-confetti";

const Success = () => {
  const playAgain = () => {
    window.location.reload();
  };

  const buyAnyway = () => {
    window.open(
      "https://dl.flipkart.com/s/j9_5cluuuN",
      "_blank"
    );
  };

  const randomMessages = [
    "🤣 I knew you'd finally give up!",
    "😈 Resistance was futile!",
    "😂 You survived Operation iPhone!",
    "❤️ You're officially an awesome friend!",
    "🍎 Now... where's my iPhone?"
  ];

  const message =
    randomMessages[
      Math.floor(Math.random() * randomMessages.length)
    ];

  return (
    <>
      <Confetti
        recycle={false}
        numberOfPieces={350}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      <motion.div
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: .5 }}
        className="w-[92%] max-w-md rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 p-8 shadow-2xl text-center"
      >
        <h1 className="text-5xl mb-4">
          🎉🤣
        </h1>

        <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="text-3xl font-extrabold text-white"
>
  🎭 Mission Complete!
</motion.h2>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="mt-5 text-lg text-white/90"
>
  You officially survived
  <span className="font-bold text-yellow-300">
    {" "}Operation iPhone
  </span>
  😈
</motion.p>

        <p className="mt-6 text-lg text-white/90">
          Did you really think
          <br />
          I'd let you buy me
          <span className="font-bold">
            {" "}an iPhone?
          </span>
          😂
        </p>

        <p className="mt-5 text-white/80">
          {message}
        </p>

        <div className="mt-10 space-y-4">
          <button
            onClick={playAgain}
            className="w-full rounded-2xl bg-white py-4 font-bold text-slate-900 transition hover:scale-105"
          >
            😂 Play Again
          </button>

          <button
            onClick={buyAnyway}
            className="w-full rounded-2xl border border-white/30 bg-white/10 py-4 font-bold text-white transition hover:bg-white/20"
          >
            🍎 Buy Me Anyway
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Success;