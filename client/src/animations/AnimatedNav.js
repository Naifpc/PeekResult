import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 1, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: -100 },
};

const AnimatedNav = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
        style={{ position: "relative", top: 0, left: 0, right: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedNav;
