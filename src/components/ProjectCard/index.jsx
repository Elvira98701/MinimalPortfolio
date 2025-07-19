import { motion } from "framer-motion";
import { Link } from "react-router";

import { IconArroy } from "@components/Icons";

import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({
  title,
  description,
  image,
  icons = [],
  link,
  index,
}) => {
  return (
    <motion.article
      className={styles.project}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <div className={styles.projectInner}>
        <img
          className={styles.projectImage}
          src={image}
          alt={title}
          width={553}
          height={330}
          loading="lazy"
        />
        <div className={styles.projectContent}>
          <h3 className={styles.projectSubtitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.projectBottom}>
            <ul className={styles.projectLogos}>
              {icons.map((icon, index) => (
                <li key={icon} className={styles.projectLogosItem}>
                  <span
                    className={`${styles[`icon-${index}`]}`}
                    style={{ backgroundImage: `url("${icon}")` }}
                  ></span>
                </li>
              ))}
            </ul>
            <Link className={styles.projectLink} to={link}>
              Show more info
              <IconArroy />
            </Link>
          </div>
        </div>
      </div>
      <Link className={styles.projectLinkSmall} to={link}>
        Visit
      </Link>
    </motion.article>
  );
};
