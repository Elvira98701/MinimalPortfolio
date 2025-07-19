import { motion } from "framer-motion";

import { ProjectCard } from "@components";
import { projectsList } from "@constants";

import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <motion.div className="container">
        <h2 className={styles.projectsTitle}>
          A small selection of{" "}
          <span className={styles.projectsAccent}>recent projects</span>
        </h2>
        <motion.div className={styles.projectsList}>
          {projectsList.map(
            ({ id, title, description, image, icons, link }, index) => (
              <ProjectCard
                key={id}
                title={title}
                description={description}
                image={image}
                icons={icons}
                link={link}
                index={index}
              />
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};
