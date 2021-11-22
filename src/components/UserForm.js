import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const formHandler = (event) => {
    event.preventDefault();
    props.onNewUserHandler({
      username: event.target.username.value,
      age: event.target.age.value,
      key: Math.random(),
    });
  };
  return (
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
  );
};

export default UserForm;
