import { motion } from "framer-motion";

import styles from "./Partners.module.scss";

import partner1 from "@assets/icons/partners/partner1.svg";
import partner2 from "@assets/icons/partners/partner2.svg";
import partner3 from "@assets/icons/partners/partner3.svg";
import partner4 from "@assets/icons/partners/partner4.svg";
import partner5 from "@assets/icons/partners/partner5.svg";

const partnersList = [
  { id: 1, img: partner1 },
  { id: 2, img: partner2 },
  { id: 3, img: partner3 },
  { id: 4, img: partner4 },
  { id: 5, img: partner5 },
];

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
