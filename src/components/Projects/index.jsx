import { motion } from "framer-motion";
import { useRef } from "react";
import useScrollAnimation from "@hooks/useScrollAnimation";

import ProjectCard from "@components/ProjectCard";

import styles from "./Projects.module.scss";

import img1 from "@assets/images/projects/1.png";
import img2 from "@assets/images/projects/2.png";
import img3 from "@assets/images/projects/3.png";
import img4 from "@assets/images/projects/4.png";

import gsap from "@assets/icons/logos/gsap.svg";
import logo from "@assets/icons/logos/logo.svg";
import logo2 from "@assets/icons/logos/logo2.svg";
import logo3 from "@assets/icons/logos/logo3.svg";
import next from "@assets/icons/logos/next.svg";
import react from "@assets/icons/logos/react.svg";
import tailwind from "@assets/icons/logos/tailwind.svg";
import threejs from "@assets/icons/logos/threejs.svg";
import ts from "@assets/icons/logos/ts.svg";

const projectsList = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: img1,
    link: "",
    icons: [react, tailwind, ts, threejs, logo3],
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    image: img2,
    link: "",
    icons: [next, tailwind, ts, logo2, logo],
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    image: img3,
    link: "",
    icons: [react, tailwind, ts, threejs, logo],
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    image: img4,
    link: "",
    icons: [next, tailwind, ts, threejs, gsap],
  },
];

const Projects = () => {
  const targetRef = useRef(null);
  const [scale, opacity] = useScrollAnimation(targetRef);

  return (
    <section className={styles.projects} id="projects">
      <motion.div
        className="container"
        style={{ scale, position: "relative" }}
        ref={targetRef}
      >
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
        <motion.div className={styles.projectsList} style={{ opacity }}>
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
