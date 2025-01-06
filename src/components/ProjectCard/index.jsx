import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";
import { Link } from "react-router";

const ProjectCard = ({
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
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947716 12.5523 0.5 12 0.5L3 0.5C2.44771 0.5 2 0.947716 2 1.5C2 2.05229 2.44771 2.5 3 2.5H11V10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z"
                  fill="white"
                />
              </svg>
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

export default ProjectCard;
