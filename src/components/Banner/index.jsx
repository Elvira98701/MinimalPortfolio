import { Button, Form, IconArroy } from "@components";
import { useModal } from "@components/Modal/ModalContext";

import styles from "./Banner.module.scss";

export const Banner = () => {
  const { openModal } = useModal();

  return (
    <section className={styles.banner}>
      <div className={`${styles.bannerInner} container`}>
        <div className={styles.bannerContent}>
          <p className={styles.bannerSlogun}>Dynamic Web Magic with Next.js</p>
          <h1 className={styles.bannerTitle}>
            Transforming Concepts into Seamless{" "}
            <span className={styles.bannerAccent}>User Experiences</span>
          </h1>
          <p className={styles.bannerDescription}>
            Hi! I’m Adrian, a Next.js Developer based in Croatia.
          </p>
          <Button onClick={() => openModal(<Form />)} type="button">
            Contact me
            <IconArroy />
          </Button>
        </div>
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={`${styles.bannerLine} ${styles[`bannerLine-${i + 1}`]}`}
          ></div>
        ))}
      </div>
    </section>
  );
};
