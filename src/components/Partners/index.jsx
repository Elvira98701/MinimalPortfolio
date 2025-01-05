import { motion } from "framer-motion";
import { partnersList } from "./data";

import styles from "./Partners.module.scss";

const Partners = () => {
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
    <section className={styles.partners}>
      <motion.div
        className={`${styles.partnersInner} container`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {partnersList.map(({ id, img }) => (
          <motion.div key={id} variants={itemVariants}>
            <img
              className={styles.partnersImage}
              src={img}
              alt="partner"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
