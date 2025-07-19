import styles from "./Preloader.module.scss";

export const Preloader = ({ isLoading }) => {
  return (
    <div
      className={`${styles.preloader} ${!isLoading && styles.preloaderHide}`}
    >
      <div className={styles.preloaderSpinner} />
    </div>
  );
};
