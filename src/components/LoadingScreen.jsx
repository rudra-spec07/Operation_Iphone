import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 12) + 5;

      if (value >= 100) {
        value = 100;
        setProgress(100);

        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 600);

        return;
      }

      setProgress(value);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: .9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-[92%] max-w-md rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 p-8 shadow-2xl"
    >
      <h1 className="text-3xl font-bold text-white text-center">
        🍎 Contacting Apple...
      </h1>

      <p className="mt-3 text-center text-white/80">
        Preparing your order...
      </p>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/20">
        <motion.div
          className="h-full rounded-full bg-white"
          animate={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-center text-white font-semibold">
        {progress}%
      </p>

      <p className="mt-2 text-center text-white/70 text-sm">
        Please don't close this page...
      </p>
    </motion.div>
  );
};

export default LoadingScreen;