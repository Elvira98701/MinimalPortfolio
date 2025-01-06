import styles from "./Button.module.scss";

const Button = ({ children, onClick, small = false, square = false }) => {
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

export default Button;
