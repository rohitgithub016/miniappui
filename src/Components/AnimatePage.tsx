import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants = {
  slide: {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  // add more types if needed (e.g., scale)
};

export default function AnimatedPage({ children, type = "slide" }: PropsWithChildren & {
    type: 'slide' | 'fade'
}) {
  return (
    <motion.div
      variants={variants[type]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
