import { motion } from "framer-motion";
import styles from "./Header.module.scss";

const navList = [
  { id: 1, name: "About", link: "#about" },
  { id: 2, name: "Projects", link: "#projects" },
  { id: 3, name: "Testimonials", link: "#testimonials" },
  { id: 4, name: "Contact", link: "#contact" },
];

const Header = () => {
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
      }}
    >
      <nav>
        <ul className={styles.headerList}>
          {navList.map(({ id, name, link }) => (
            <li className={styles.headerItem} key={id}>
              <a className={styles.headerLink} href={link}>
                <span className={styles.headerText}>{name}</span>
                <span className={styles.headerText}>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
