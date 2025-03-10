import { animate, motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: 0 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: 0.2}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage