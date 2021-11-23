import { useState } from "react";
import styles from "./UserForm.module.css";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const UserForm = (props) => {
  

  const [inputValid, changeInputValid] = useState(true);

  const exitErrorHandler = () => {
    changeInputValid(true);
  };

  const formHandler = (event) => {
    event.preventDefault();
    let userName = event.target.username.value;
    let age = event.target.age.value;

    if (userName === "" || age === "") {
      changeInputValid(false);
      return;
    }

    props.onNewUserHandler({
      username: userName,
      age: age,
      key: Math.random(),
    });

    event.target.username.value='';
    event.target.age.value='';
    
  };

  return (
    <div>
      {!inputValid && <ErrorMessage exitClick={exitErrorHandler} />}
      <form className={styles.form} onSubmit={formHandler}>
        <label className={styles.label}>Username</label>
        <input name="username" type="text" className={styles.input} />
        <label className={styles.label}>Age (Years)</label>
        <input
          name="age"
          className={styles.input}
          type="number"
          max="300"
          min="0"
          step="1"
        />
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
