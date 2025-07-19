import { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";

import { testimonialsList } from "@constants";

import styles from "./Testimonials.module.scss";

export const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <motion.h2
          className={styles.testimonialsTitle}
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
          Kind words from{" "}
          <span className={styles.testimonialsAccent}>satisfied clients</span>
        </motion.h2>
      </div>
      <div className={styles.testimonialsContent} ref={targetRef}>
        <div className={styles.testimonialsBody}>
          <motion.div
            style={{ x }}
            className={styles.testimonialsCards}
            transition={{
              duration: 3,
            }}
          >
            {testimonialsList.map(({ id, description, name, profession }) => (
              <div className={styles.testimonialsCard} key={id}>
                <p className={styles.testimonialsDescription}>{description}</p>
                <div className={styles.testimonialsBottom}>
                  <span className={styles.testimonialsName}>{name}</span>
                  <span className={styles.testimonialsProfession}>
                    {profession}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
