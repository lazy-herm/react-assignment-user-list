import styles from './UserListItem.module.css';

const UserListItem = (props) => {
  return <li className={styles.item} id={props.user.key} onClick={props.removeUserHandler}>{props.user.username} ({props.user.age} years old)</li>;
};

export default UserListItem;
