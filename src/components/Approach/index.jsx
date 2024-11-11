import { motion } from "framer-motion";

import styles from "./Approach.module.scss";

const approachList = [
  {
    id: 1,
    title: "Planning & Strategy",
    description:
      "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    id: 2,
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    id: 3,
    title: "Development & Launch",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

const Approach = () => {
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
        <motion.h2
          className={styles.approachTitle}
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
          My <span className={styles.approachAccent}>approach</span>
        </motion.h2>
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
                  <svg
                    className={styles[`icon-${i + 1}`]}
                    key={i}
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z"
                        fill="#E4ECFF"
                      />
                    </g>
                  </svg>
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

export default Approach;
