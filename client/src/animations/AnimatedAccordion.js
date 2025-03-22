import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const AnimatedAccordion = ({ children, key }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2 }}
        style={{ position: "relative", top: 0, left: 0, right: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedAccordion;
