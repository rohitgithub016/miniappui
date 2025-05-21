// components/AnimatedPage.jsx
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const slideVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
};

export default function AnimatedPage({ children }: PropsWithChildren) {
    return (
        <motion.div
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
