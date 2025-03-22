import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 15 },
  exit: { opacity: 0, y: -100 },
};

const AnimatedAlert = ({ children, showAlert }) => {
  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          style={{ position: "fixed", top: 0, left: 0, right: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedAlert;
