import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { experinceList } from "@constants";

import styles from "./Experince.module.scss";

export const Experince = () => {
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleSize = () => {
      setOffsetWidth(containerRef.current.offsetWidth);
      setOffsetHeight(containerRef.current.offsetHeight);
    };

    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <section className={styles.experince}>
      <div className="container">
        <motion.h2
          className={styles.experinceTitle}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 1.2,
            damping: 6,
            stiffness: 50,
            restDelta: 0.001,
          }}
        >
          My <span className={styles.experinceAccent}>work experince</span>
        </motion.h2>
        <motion.div className={styles.experinceList}>
          {experinceList.map(({ id, title, description, image }, i) => (
            <article
              className={styles.experinceCard}
              key={id}
              ref={containerRef}
            >
              <img
                className={styles.experinceImage}
                src={image}
                alt={title}
                loading="lazy"
              />
              <div>
                <h3 className={styles.experinceSubtitle}>{title}</h3>
                <p className={styles.experinceDescription}>{description}</p>
              </div>
              <motion.div
                className={styles.experinceCircle}
                animate={{
                  x: [
                    "0px",
                    `${offsetWidth}px`,
                    `${offsetWidth}px`,
                    "0px",
                    "0px",
                  ],
                  y: [
                    "0px",
                    "0px",
                    `${offsetHeight}px`,
                    `${offsetHeight}px`,
                    "0px",
                  ],
                }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                  delay: 0.8 * i,
                  repeatDelay: 0.2 * i,
                }}
              />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
