import styles from "./Form.module.scss";

const Form = () => {
  return (
    <>
      <h3 className={styles.title}>Contact me</h3>
      <form className={styles.form}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          className={styles.formInput}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        <textarea
          className={styles.formTextarea}
          name="message"
          id="message"
          placeholder="Enter your message"
          rows={7}
          required
        ></textarea>
        <button className={styles.formSubmit} type="submit">
          Send message
        </button>
      </form>
    </>
  );
};

export default Form;
