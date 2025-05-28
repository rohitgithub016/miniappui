import { motion } from "motion/react";

const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}     // Slide in from right
      animate={{ x: 0, opacity: 1 }}          // Settle in center
      exit={{ x: '-100%', opacity: 0 }}       // Exit to left
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.5,
      }}

    >
      {children}
    </motion.div>
  );
};

export default AnimatePage;
