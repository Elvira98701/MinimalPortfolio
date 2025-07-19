import { motion } from "framer-motion";

import { IconPlus } from "@components";
import { approachList } from "@constants";

import styles from "./Approach.module.scss";

export const Approach = () => {
  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible,
  };

  return (
    <section className={styles.approach}>
      <div className="container">
        <h2 className={styles.approachTitle}>
          My <span className={styles.approachAccent}>approach</span>
        </h2>
        <motion.div
          className={styles.approachList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {approachList.map(({ id, title, description }) => (
            <motion.div
              key={id}
              className={styles.approachItem}
              variants={itemVariants}
            >
              <motion.div
                className={styles.approachInner}
                whileHover="hover"
                transition={{
                  duration: 1,
                  ease: "backInOut",
                }}
                variants={{
                  hover: {
                    scale: 1.05,
                  },
                }}
              >
                <div className={styles.approachText}>
                  <h3 className={styles.approachSubtitle}>{title}</h3>
                  <p>{description}</p>
                </div>
                {Array.from({ length: 4 }, (_, i) => (
                  <IconPlus key={i} className={styles[`icon-${i + 1}`]} />
                ))}
                <motion.svg
                  width="320"
                  height="384"
                  viewBox="0 0 320 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.approachCircle}
                  variants={{
                    hover: {
                      scale: 1.5,
                    },
                  }}
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                >
                  <motion.circle
                    variants={{
                      hover: {
                        scaleY: 0.5,
                        y: -25,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    cx="160.5"
                    cy="114.5"
                    r="101.5"
                    fill="#262626"
                  />
                  <motion.ellipse
                    variants={{
                      hover: {
                        scaleY: 2.25,
                        y: -25,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    cx="160.5"
                    cy="265.5"
                    rx="101.5"
                    ry="43.5"
                    fill="#262626"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
