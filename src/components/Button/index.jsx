import styles from "./Button.module.scss";

export const Button = ({
  children,
  onClick,
  small = false,
  square = false,
}) => {
  return (
    <button
      className={`${styles.button} ${small ? styles.buttonSmall : ""} ${
        square ? styles.buttonSquare : ""
      }`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
