import styles from "./ErrorMessage.module.css";
const ErrorMessage = (props) => {
  return (
    <div className={styles.errorBackdrop} onClick={props.exitClick}>
      <div className={styles.errorBox}>
        <div className={styles.errorBox__header}>
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.errorBox__body}>
          <p>Empty values are not accepted. Enter valid Username and Age.</p>
          <button type="button" className={styles.button} onClick={props.exitClick}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
