import { motion } from "framer-motion";
import ProjectCard from "@components/ProjectCard";
import { projectsList } from "./data";

import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <motion.div className="container">
        <motion.h2
          className={styles.projectsTitle}
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
          A small selection of{" "}
          <span className={styles.projectsAccent}>recent projects</span>
        </motion.h2>
        <motion.div className={styles.projectsList}>
          {projectsList.map(
            ({ id, title, description, image, icons, link }) => (
              <ProjectCard
                key={id}
                title={title}
                description={description}
                image={image}
                icons={icons}
                link={link}
              />
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
