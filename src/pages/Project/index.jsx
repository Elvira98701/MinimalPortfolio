import { motion } from "framer-motion";
import { useParams } from "react-router";
import { projectsList } from "@components/Projects/data";

import styles from "./Project.module.scss";

const Project = () => {
  const { id } = useParams();
  const project = projectsList.find((project) => project.id === Number(id));

  return (
    <main>
      <section className={styles.project}>
        <div className={`${styles.projectInner} container`}>
          <motion.h1
            className={styles.projectTitle}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 1.2,
              damping: 6,
              stiffness: 50,
              restDelta: 0.001,
              delay: 0.5,
            }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
          >
            {project.description}
          </motion.p>
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className={styles.projectImage}
            src={project.image}
            alt={project.title}
          />
        </div>
      </section>
      <section className={styles.stack}>
        <div className={`${styles.stackInner} container`}>
          <div className={styles.stackWrapper}>
            <div className={styles.stackBig}>
              {project.icons.slice(0, 3).map((icon, index) => (
                <span
                  key={icon}
                  className={`${styles[`icon-${index}`]}`}
                  style={{ backgroundImage: `url("${icon}")` }}
                ></span>
              ))}
            </div>
          </div>
          <div className={styles.stackWrapper}>
            <div className={styles.stackSmall}>
              {project.icons.slice(3).map((icon, index) => (
                <span
                  key={icon}
                  className={`${styles[`icon-${index}`]}`}
                  style={{ backgroundImage: `url("${icon}")` }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
