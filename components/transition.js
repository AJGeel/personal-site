import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  out: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.15,
    },
  },
  in: {
    opacity: 1,
    scale: 1.0,
    transition: {
      duration: 0.15,
      delay: 0.15,
    },
  },
};

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
