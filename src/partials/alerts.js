import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const Alerts = (props) => {

  useEffect(() => {
    let timeout
    if (props.showAlert) {
      timeout = setTimeout(() => props.onClose(), 3000);
    }
    return () => clearTimeout(timeout);
  }, [props.showAlert]);


  return (
    <AnimatePresence>
      {props.showAlert && (
        <motion.div
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          style={{ position: "fixed", top: 0, left: 0, right: 0,zIndex: 9999 }}
        >
          <Alert {...props} className="d-flex gap-1  m-2 m-lg-5">
            {props.icon}
            {props.msg}
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alerts;
