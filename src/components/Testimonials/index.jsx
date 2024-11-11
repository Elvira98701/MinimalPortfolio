import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import styles from "./Testimonials.module.scss";

const cards = [
  {
    name: "Michael Johnson",
    profession: "Director of AlphaStream Technologies",
    id: 1,
    description:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
  {
    name: "Michael Johnson",
    profession: "Director of AlphaStream Technologies",
    id: 2,
    description:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
  {
    name: "Michael Johnson",
    profession: "Director of AlphaStream Technologies",
    id: 3,
    description:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
  {
    name: "Michael Johnson",
    profession: "Director of AlphaStream Technologies",
    id: 4,
    description:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
  {
    name: "Michael Johnson",
    profession: "Director of AlphaStream Technologies",
    id: 5,
    description:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
];

const Testimonials = () => {
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
            {cards.map(({ id, description, name, profession }) => (
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

export default Testimonials;
