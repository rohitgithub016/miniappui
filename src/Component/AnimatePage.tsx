import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { selectAnimateLeftToRight } from "../appslice";

const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  const animateLeftToRight = useSelector(selectAnimateLeftToRight);

  return (
    <motion.div
      initial={animateLeftToRight ? { x: '-100%', opacity: 0 } : {x: '100%', opacity: 0}}     // Slide in from right
      animate={{ x: 0, opacity: 1 }}          
      exit={animateLeftToRight ? { x: '100%', opacity: 0 } : {x: '-100%', opacity: 0}}       // Exit to left
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
