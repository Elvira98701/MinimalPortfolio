import { useScroll, motion } from "framer-motion";
import styles from "./Scroll.module.scss";

const Scroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <svg
      className={styles.scroll}
      id="progress"
      width="120"
      height="120"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className={styles.scrollBg}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className={styles.scrollIndicator}
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  );
};

export default Scroll;
