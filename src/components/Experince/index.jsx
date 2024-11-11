import { motion } from "framer-motion";

import styles from "./Experince.module.scss";

import experince1 from "@assets/icons/experince/experince1.svg";
import experince2 from "@assets/icons/experince/experince2.svg";
import experince3 from "@assets/icons/experince/experince3.svg";
import experince4 from "@assets/icons/experince/experince4.svg";

const experinceList = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    image: experince1,
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    description:
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    image: experince2,
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    description:
      "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    image: experince3,
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    description:
      "Developed and maintained user-facing features using modern frontend technologies.",
    image: experince4,
  },
];

const Experince = () => {
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
          {experinceList.map(({ id, title, description, image }) => (
            <motion.article className={styles.experinceCard} key={id}>
              <img className={styles.experinceImage} src={image} alt={title} />
              <div>
                <h3 className={styles.experinceSubtitle}>{title}</h3>
                <p className={styles.experinceDescription}>{description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experince;
