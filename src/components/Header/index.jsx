import { motion } from "framer-motion";
import { navList } from "./data";

import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 1.2,
        damping: 6,
        stiffness: 50,
        restDelta: 0.001,
        delay: 0.4,
      }}
    >
      <nav>
        <ul className={styles.headerList}>
          {pathname === "/" ? (
            navList.map(({ id, name, link }) => (
              <li className={styles.headerItem} key={id}>
                <a className={styles.headerLink} href={link}>
                  <span className={styles.headerText}>{name}</span>
                  <span className={styles.headerText}>{name}</span>
                </a>
              </li>
            ))
          ) : (
            <li className={styles.headerItem}>
              <Link to="/" className={styles.headerLink}>
                <span className={styles.headerText}>Home</span>
                <span className={styles.headerText}>Home</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
