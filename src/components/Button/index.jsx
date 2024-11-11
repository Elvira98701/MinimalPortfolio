import styles from "./Button.module.scss";

const Button = ({ children, onClick, small = false }) => {
  return (
    <button
      className={`${styles.button} ${small ? styles.buttonSmall : ""}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
