import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Globe, Button, IconCopy } from "@components";
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
                type="button"
              >
                <IconCopy />
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
