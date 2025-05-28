import { motion } from "motion/react";

const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatePage;
