import { motion } from "motion/react";

const AnimatePage = () => {
  return (
    <motion.div
      className="box"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 25,
      }}
    >
      <div>AnimatePage</div>
    </motion.div>
  );
};

export default AnimatePage;
