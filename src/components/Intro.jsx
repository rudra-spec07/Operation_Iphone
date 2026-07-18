import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Intro = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center"
    >
      <FaHeart
        className="text-pink-500 text-7xl mb-6"
      />

      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center">
        Operation iPhone
      </h1>

      <p className="mt-5 max-w-md text-center text-sm text-white/80 sm:text-lg">
        Your mission, should you choose to accept it,
        is to buy me an iPhone 17 📱
      </p>

      <button
        onClick={onStart}
        className="mt-10 rounded-xl bg-pink-500 px-6 py-3 text-base font-bold text-white hover:bg-pink-600 transition sm:px-8 sm:py-4 sm:text-lg"      >
        Start Mission 🚀
      </button>
    </motion.div>
  );
};

export default Intro;