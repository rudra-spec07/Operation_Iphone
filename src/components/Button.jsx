import { motion } from "framer-motion";

const Button = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="
      w-full
      rounded-2xl
      py-3
      sm:py-4
      text-base
      sm:text-lg
      font-bold
      text-slate-900
      bg-white
      shadow-xl
      hover:bg-slate-100
      active:bg-slate-200
      transition-all
      duration-300
      "
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;