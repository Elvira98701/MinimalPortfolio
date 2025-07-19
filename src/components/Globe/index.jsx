import styles from "./Globe.module.scss";

export const Globe = () => {
  return (
    <div className={styles.globeContainer}>
      <div className={styles.globe}>
        <div className={styles.globeSphere} />
        <div className={styles.globeOuterShadow} />
        <div className={styles.globeWorldmap}>
          <div className={styles.globeWorldmapBack} />
          <div className={styles.globeWorldmapFront} />
        </div>
        <div className={styles.globeInnerShadow} />
      </div>
    </div>
  );
};
