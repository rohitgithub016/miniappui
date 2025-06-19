import { motion } from "framer-motion";

import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const pageVariants = {
  initial: {
    x: "100%",
    opacity: 0,
    position: "absolute",
    width: "100%",
  },
  animate: {
    x: 0,
    opacity: 1,
    position: "absolute",
    width: "100%",
  },
  exit: {
    x: "-100%",
    position: "absolute",
    width: "100%",
    opacity: 0
  },
};
const Page = ({ children }: PageProps) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Page;
