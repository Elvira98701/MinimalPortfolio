import styles from "./Preloader.module.scss";

const Preloader = ({ isLoading }) => {
  return (
    <div
      className={`${styles.preloader} ${!isLoading && styles.preloaderHide}`}
    >
      <div className={styles.preloaderSpinner}></div>
    </div>
  );
};

export default Preloader;
