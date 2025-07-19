import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Globe, Button } from "@components";
import { aboutList } from "@constants";

import styles from "./About.module.scss";

export const About = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const handleCopyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("copy");
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    let timerId;

    if (isOpenNotification) {
      timerId = setTimeout(() => {
        setIsOpenNotification(false);
      }, 1500);
    }

    return () => clearTimeout(timerId);
  }, [isOpenNotification]);

  return (
    <section className={styles.about} id="about">
      <motion.div className={`${styles.aboutList} container`}>
        {aboutList.map((obj) => (
          <motion.div
            className={`${styles.aboutItem} ${styles[`aboutItem-${obj.id}`]}`}
            key={obj.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {obj.slogun && <p>{obj.slogun}</p>}
            <h3>{obj.title}</h3>
            {obj.id === 2 && (
              <div className={styles.aboutGlobe}>
                <Globe />
              </div>
            )}
            {obj.id === 5 && (
              <Button
                small={true}
                onClick={() => {
                  handleCopyToClipboard("fakeemail@mail.ru");
                  setIsOpenNotification(true);
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.08331 4.639C3.08331 4.22639 3.24722 3.83068 3.53898 3.53892C3.83074 3.24716 4.22645 3.08325 4.63906 3.08325H9.69423C9.89853 3.08325 10.1008 3.12349 10.2896 3.20168C10.4783 3.27986 10.6498 3.39446 10.7943 3.53892C10.9388 3.68339 11.0534 3.85489 11.1316 4.04364C11.2097 4.23239 11.25 4.4347 11.25 4.639V9.69417C11.25 9.89847 11.2097 10.1008 11.1316 10.2895C11.0534 10.4783 10.9388 10.6498 10.7943 10.7943C10.6498 10.9387 10.4783 11.0533 10.2896 11.1315C10.1008 11.2097 9.89853 11.2499 9.69423 11.2499H4.63906C4.43476 11.2499 4.23246 11.2097 4.0437 11.1315C3.85495 11.0533 3.68345 10.9387 3.53898 10.7943C3.39452 10.6498 3.27992 10.4783 3.20174 10.2895C3.12355 10.1008 3.08331 9.89847 3.08331 9.69417V4.639Z"
                    stroke="#E4ECFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.34033 8.76325C1.16145 8.66127 1.01266 8.51387 0.909002 8.33596C0.805345 8.15804 0.750497 7.95591 0.75 7.75V1.91667C0.75 1.275 1.275 0.75 1.91667 0.75H7.75C8.1875 0.75 8.4255 0.974583 8.625 1.33333"
                    stroke="#E4ECFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Copy my email address
              </Button>
            )}
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpenNotification && (
          <motion.div
            className={styles.aboutNotification}
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.7,
            }}
          >
            Email is Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
