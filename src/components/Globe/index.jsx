import styles from "./Globe.module.scss";

export const Globe = () => {
  return (
    <div className={styles.globeContainer}>
      <div className={styles.globe}>
        <div className={styles.globeSphere}></div>
        <div className={styles.globeOuterShadow}></div>
        <div className={styles.globeWorldmap}>
          <div className={styles.globeWorldmapBack}></div>
          <div className={styles.globeWorldmapFront}></div>
        </div>
        <div className={styles.globeInnerShadow}></div>
      </div>
    </div>
  );
};
